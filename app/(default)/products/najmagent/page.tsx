import type { Metadata } from "next";
import Starfield from "@/components/starfield";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "NajmAgent - AI-Powered Voice Agent | NajmX",
  description: "AI-powered voice agent that makes real calls with real-time responses. Natural conversations, intelligent routing, and continuous learning.",
};

export default function NajmAgentPage() {
  return (
    <>
      <Starfield />
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                NajmAgent
              </span>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              AI-Powered Conversational Voice Agent
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-3xl mx-auto">
              Advanced AI voice agent that makes real phone calls with natural conversations, intelligent routing, and continuous learning capabilities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Natural Language Processing</h2>
              <p className="text-indigo-200/65 mb-4">
                Advanced NLP engine for human-like conversations:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Large Language Model (LLM) integration with real-time inference</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Context-aware dialogue management and memory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Multi-turn conversation handling with intent recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Sentiment analysis and emotional intelligence</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Real-Time Voice Synthesis</h2>
              <p className="text-indigo-200/65 mb-4">
                High-quality text-to-speech with natural voice characteristics:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Neural TTS with multiple voice options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Low-latency streaming for natural conversation flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Emotional tone and prosody control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Multi-language support with accent customization</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Intelligent Call Routing</h2>
              <p className="text-indigo-200/65 mb-4">
                Smart routing based on conversation analysis:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Intent-based routing to appropriate departments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Escalation to human agents when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Priority queue management based on urgency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>CRM integration for personalized experiences</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Continuous Learning</h2>
              <p className="text-indigo-200/65 mb-4">
                Self-improving AI system that learns from interactions:
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Conversation analytics and performance metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Feedback loop for model fine-tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>A/B testing for conversation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Custom knowledge base integration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 via-indigo-800/10 to-gray-900/50 p-8 border border-indigo-800/30 text-center">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 mb-4">Enterprise Capabilities</h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Advanced AI Engine
                </h3>
                <p className="text-indigo-200/65 text-sm">State-of-the-art language models with custom fine-tuning capabilities</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Natural Voice Technology
                </h3>
                <p className="text-indigo-200/65 text-sm">Premium voice synthesis and recognition for human-like interactions</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <h3 className="text-indigo-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  Seamless Integration
                </h3>
                <p className="text-indigo-200/65 text-sm">Flexible APIs and connectors for easy deployment in your ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

