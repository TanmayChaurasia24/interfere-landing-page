import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Search,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Shield,
  Cpu,
  Eye,
  Bot,
} from "lucide-react";
import { useState, useEffect } from "react";
import { ChatDemo } from "@/components/ChatDemo";
import { SystemMonitor } from "@/components/SystemMonitor";
import { GlowingEffectDemo } from "@/components/glowingBlocks";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";

const Index = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [bugsFixed, setBugsFixed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBugsFixed((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const demoSteps = [
    {
      stage: "Bug Detected",
      icon: Eye,
      // Purple gradient background, white icon
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      iconColor: "text-white",
    },
    {
      stage: "Analyzing...",
      icon: Cpu,
      // Orange gradient background, white icon
      bg: "bg-gradient-to-r from-yellow-500 to-orange-500",
      iconColor: "text-white",
    },
    {
      stage: "Auto-Fixed",
      icon: CheckCircle,
      // Green gradient background, white icon
      bg: "bg-gradient-to-r from-green-500 to-emerald-500",
      iconColor: "text-white",
    },
  ];

  const features = [
    {
      icon: Eye,
      title: "DETECT",
      description:
        "AI-powered bug detection that never sleeps. Catches issues before your users do.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Search,
      title: "TRIAGE",
      description:
        "Smart prioritization and categorization. Every bug gets the attention it deserves.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Bot,
      title: "FIX",
      description:
        "Autonomous bug resolution. Code patches generated and deployed automatically.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Lead Developer @ TechCorp",
      avatar: "🚀",
      quote:
        "Interfere eliminated 90% of our bug backlog in the first week. It's like having a superhuman dev on the team.",
    },
    {
      name: "Sarah Kim",
      role: "CTO @ StartupXYZ",
      avatar: "⚡",
      quote:
        "We went from firefighting bugs to building features. Interfere gave us our sanity back.",
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Engineer @ ScaleUp",
      avatar: "🔥",
      quote: "The auto-fixing is mind-blowing. It's like magic, but for code.",
    },
  ];

  return (
    <div className="min-h-screen bg-deep-black text-white overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 flex justify-between items-center border-b border-purple-500/20">
        <div className="font-orbitron font-bold text-2xl text-glow">
          INTERFERE
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="hover:text-neon-purple transition-colors"
          >
            Features
          </a>
          <a href="#demo" className="hover:text-neon-purple transition-colors">
            Demo
          </a>
          <a
            href="#testimonials"
            className="hover:text-neon-purple transition-colors"
          >
            Reviews
          </a>
        </div>
        <Button className="cyber-gradient text-white font-semibold hover:scale-105 transition-transform">
          Sign In
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/50 text-lg px-6 py-2">
            🚀 The Future of Bug Management
          </Badge>

          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-8 leading-tight">
            <span className="glitch-text text-glow" data-text="FIX BUGS">
              FIX BUGS
            </span>
            <br />
            <span className="cyber-gradient bg-clip-text text-transparent">
              WITHOUT LIFTING
            </span>
            <br />
            <span className="glitch-text text-glow" data-text="A FINGER">
              A FINGER
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Interfere is the{" "}
            <span className="text-neon-purple font-semibold">
              experience layer
            </span>{" "}
            for modern product teams. Automatic bug detection, triaging, and
            fixing with{" "}
            <span className="text-toxic-green font-semibold">
              zero human intervention
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="cyber-gradient text-white font-bold text-lg px-8 py-4 hover:scale-105 transition-transform neon-glow-hover"
            >
              <Zap className="mr-2" />
              Try Interfere Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-4"
            >
              Watch Demo
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-bounce-slow">
              <div className="text-3xl font-bold text-toxic-green">
                {bugsFixed * 147}+
              </div>
              <div className="text-gray-400">Bugs Fixed Today</div>
            </div>
            <div
              className="animate-bounce-slow"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-3xl font-bold text-cyber-pink">99.7%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div
              className="animate-bounce-slow"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-3xl font-bold text-glitch-blue">24/7</div>
              <div className="text-gray-400">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-glow">
            THE TRINITY OF{" "}
            <span className="cyber-gradient bg-clip-text text-transparent">
              AUTOMATION
            </span>
          </h2>
          <div>
            <GlowingEffectDemo/>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 text-glow">
            INTERACTIVE{" "}
            <span className="cyber-gradient bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChatDemo />
            <SystemMonitor />
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-12 text-glow">
            WATCH THE{" "}
            <span className="cyber-gradient bg-clip-text text-transparent">
              MAGIC
            </span>{" "}
            HAPPEN
          </h2>

          <Card className="bg-gradient-to-br from-purple-500 via-orange-400 to-emerald-500 border border-purple-500/30 p-[1] transition-all duration-300 hover:translate-y-[-5px] hover-float neon-glow-hover">
            <div className="bg-black rounded-lg p-6 mb-6 font-mono text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400">terminal.js</span>
              </div>

              <div className="space-y-2 text-green-400">
                <div className="animate-pulse">
                  $ interfere --monitor production
                </div>
                <div className="text-red-400">
                  ⚠️ Bug detected: Null pointer exception in UserAuth.js:42
                </div>
                <div className="text-yellow-400">
                  🔍 Analyzing impact and generating fix...
                </div>
                <div className="text-blue-400">🤖 Auto-generating patch...</div>
                <div className="text-green-400">
                  ✅ Bug fixed and deployed in 2.3 seconds
                </div>
                <div className="text-purple-400">
                  🚀 Zero downtime, zero human intervention
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8">
              {demoSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-2 opacity-100 text-white transition-opacity`}
                >
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center ${step.bg} neon-glow`}
                  >
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  <span className="text-md font-semibold">{step.stage}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Why Interfere Works */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 text-glow">
            WHY{" "}
            <span className="cyber-gradient bg-clip-text text-transparent">
              INTERFERE
            </span>{" "}
            WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-neon-purple mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    AI-Powered Detection
                  </h3>
                  <p className="text-gray-300">
                    Advanced machine learning models trained on millions of
                    codebases detect anomalies before they become critical
                    issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Cpu className="w-8 h-8 text-cyber-pink mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Triaging</h3>
                  <p className="text-gray-300">
                    Intelligent prioritization based on impact, complexity, and
                    business logic ensures critical issues get fixed first.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Bot className="w-8 h-8 text-toxic-green mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Autonomous Fixing</h3>
                  <p className="text-gray-300">
                    Code generation and deployment happens automatically with
                    full testing and rollback capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl opacity-100"></div>
              <Card className="bg-gradient-to-br from-purple-500 via-orange-400 to-emerald-500 border border-purple-500/30 p-[1] transition-all duration-300 hover:translate-y-[-5px] hover-float neon-glow-hover rounded-3xl">
                <div className="text-center space-y-6 bg-black rounded-3xl p-5">
                  <div className="w-24 h-24 mx-auto cyber-gradient rounded-full flex items-center justify-center animate-spin-slow">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">99.7% Success Rate</h3>
                  <p className="text-gray-300">
                    Our AI has successfully fixed over 10 million bugs across
                    thousands of applications with minimal human oversight.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-16 text-glow">
            WHAT THE{" "}
            <span className="cyber-gradient bg-clip-text text-transparent">
              PROS
            </span>{" "}
            SAY
          </h2>

          <div className="">
              <AnimatedTestimonialsDemo />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="font-orbitron font-bold text-2xl mb-4 text-glow">
                INTERFERE
              </div>
              <p className="text-gray-400 mb-6">
                The experience layer for modern product teams. Fix bugs without
                lifting a finger.
              </p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/50"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/50"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/50"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/50"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Documentation</div>
                <div>API</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact</div>
                <div>Status</div>
                <div>Security</div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Interfere. All rights reserved. Made with ⚡ for
              developers who code fast and break things faster.
            </p>
            <p className="mt-2 text-xs">
              🐛 Easter egg: Konami code activated = secret developer mode
            </p>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Index;
