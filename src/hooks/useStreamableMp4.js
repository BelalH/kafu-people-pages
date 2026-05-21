import { useEffect, useState } from "react";
import { getStreamableVideoId } from "../constants/media";

/**
 * Resolves a Streamable page URL to a signed CDN MP4 URL via their API.
 * @see https://api.streamable.com/videos/{id}
 */
export function useStreamableMp4(streamablePageUrl) {
  const [src, setSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!streamablePageUrl) {
      setSrc(null);
      setFailed(false);
      return undefined;
    }

    const id = getStreamableVideoId(streamablePageUrl);
    if (!id) {
      setFailed(true);
      setSrc(null);
      return undefined;
    }

    let cancelled = false;
    setFailed(false);
    setSrc(null);

    fetch(`https://api.streamable.com/videos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Streamable API ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const url =
          data?.files?.["mp4-mobile"]?.url ?? data?.files?.mp4?.url ?? null;
        if (url) setSrc(url);
        else setFailed(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [streamablePageUrl]);

  return { src, failed };
}
