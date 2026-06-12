import blogImg from "../assets/images/blogs/cloudComputing1.png";

const staticBlogs = [
  {
    _id: "static-001",
    slug: "building-scalable-ai-agents",
    title: "Building Scalable AI Agents for Real-World Business Problems",
    description:
      "Artificial intelligence is no longer a futuristic concept — it is a practical tool that businesses of every size can leverage today. At Kafu People, we have spent the last several years designing and deploying AI agents that handle real work: answering customer queries, enriching data pipelines, summarising internal documents, and automating repetitive decision-making.\n\n" +
      "The key insight we have learned is that a successful AI agent is not just about the model. It is about how the agent fits into existing workflows, how it handles errors gracefully, and how it communicates its reasoning to human users. A black-box model that produces correct answers without explanation is far less useful than a transparent system that shows its work.\n\n" +
      "We typically architect agents in three layers:\n\n" +
      "1. Perception layer — ingesting data from APIs, databases, or user input.\n" +
      "2. Reasoning layer — the LLM or rule engine that decides what action to take.\n" +
      "3. Action layer — executing the decision, whether that means sending an email, updating a record, or calling another service.\n\n" +
      "By keeping these layers loosely coupled, we can swap out the underlying model as the ecosystem evolves without rewriting the entire system. This modularity has been critical for clients who started with GPT-4 and later migrated to open-source models like Llama or Mistral for cost reasons.\n\n" +
      "If you are considering adding AI agents to your product roadmap, start small. Pick one repetitive task that consumes at least five hours of human time per week, automate it, measure the savings, and then expand. That iterative approach consistently delivers the highest return on investment.",
    category: "AI",
    image: blogImg,
  },
];

export default staticBlogs;

export function getStaticBlogById(id) {
  return staticBlogs.find((b) => b._id === id) || null;
}

export function getStaticBlogBySlug(slug) {
  return staticBlogs.find((b) => b.slug === slug) || null;
}
