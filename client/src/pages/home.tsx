import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Zap, Brain, Network, Twitter, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import devuraIcon from "@assets/Group 13_1751044863269.png";
import devuraText from "@assets/Layer_1_1751044855929.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/signup", { email }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing! We'll notify you when Devura launches.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      signupMutation.mutate(email);
    }
  };

  return (
    <div className="min-h-screen bg-devura-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={devuraText} alt="Devura" className="h-8 object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-devura-light hover:text-devura-cyan transition-colors">About</a>
              <a href="#ecosystem" className="text-devura-light hover:text-devura-cyan transition-colors">Ecosystem</a>
              <a href="#contact" className="text-devura-light hover:text-devura-cyan transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative neural-bg network-pattern flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-devura-black via-devura-black/95 to-devura-blue/10"></div>
        
        {/* Floating Neural Network Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-3 h-3 bg-devura-cyan rounded-full opacity-60"
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-2 h-2 bg-devura-electric rounded-full opacity-40"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-4 h-4 bg-devura-light rounded-full opacity-50"
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-2 h-2 bg-devura-cyan rounded-full opacity-70"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Logo Display - Removed per user request */}
            
            <div className="mb-6">
              <img src={devuraText} alt="DEVURA" className="h-16 md:h-24 mx-auto object-contain" />
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-devura-light mb-2">Revolutionary AI Subnet on</p>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-3xl md:text-4xl font-bold text-devura-electric">Bittensor</span>
                <span className="text-devura-cyan text-2xl">×</span>
                <span className="text-2xl md:text-3xl font-bold text-devura-cyan">TAO</span>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="inline-block glass-effect rounded-full px-8 py-4 mb-6">
                <span className="text-2xl md:text-3xl font-bold text-devura-cyan">COMING SOON</span>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Pioneering the future of decentralized artificial intelligence. 
                Join the revolution where AI meets blockchain innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                className="bg-gradient-to-r from-devura-blue to-devura-electric hover:from-devura-electric hover:to-devura-cyan px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-devura-blue/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Notified
              </Button>
              <Button 
                variant="outline"
                className="glass-effect hover:bg-devura-blue/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-devura-blue/30"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-devura-black to-devura-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-devura-light to-devura-cyan bg-clip-text text-transparent">
              The Future of AI is Decentralized
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Devura represents the next evolution in artificial intelligence, built on the revolutionary Bittensor network and powered by TAO tokens.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="glass-effect rounded-2xl hover:bg-devura-blue/10 transition-all duration-300 transform hover:scale-105 border-devura-blue/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-devura-blue to-devura-cyan rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-devura-light">Intelligent Mining</h3>
                <p className="text-gray-300">Advanced AI algorithms that optimize mining processes and contribute valuable intelligence to the Bittensor network.</p>
              </CardContent>
            </Card>
            
            {/* Feature Card 2 */}
            <Card className="glass-effect rounded-2xl hover:bg-devura-blue/10 transition-all duration-300 transform hover:scale-105 border-devura-blue/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-devura-cyan to-devura-light rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-devura-light">TAO Powered</h3>
                <p className="text-gray-300">Seamlessly integrated with TAO economics, ensuring fair rewards and sustainable growth within the ecosystem.</p>
              </CardContent>
            </Card>
            
            {/* Feature Card 3 */}
            <Card className="glass-effect rounded-2xl hover:bg-devura-blue/10 transition-all duration-300 transform hover:scale-105 border-devura-blue/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-devura-light to-devura-electric rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-devura-light">Decentralized Network</h3>
                <p className="text-gray-300">Part of the robust Bittensor ecosystem, contributing to and benefiting from collective machine intelligence.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-devura-gray neural-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Built for the 
                <span className="bg-gradient-to-r from-devura-cyan to-devura-light bg-clip-text text-transparent">
                  {" "}Bittensor Ecosystem
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Devura joins the growing family of specialized subnets within Bittensor, contributing unique AI capabilities while earning TAO rewards through the innovative Proof of Intelligence consensus mechanism.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-devura-cyan rounded-full"></div>
                  <span className="text-devura-light">118+ Active Subnets and Growing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-devura-electric rounded-full"></div>
                  <span className="text-devura-light">$2.8B+ TAO Market Capitalization</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-devura-light rounded-full"></div>
                  <span className="text-devura-light">Decentralized AI Innovation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-devura-blue/20 to-devura-cyan/20 rounded-3xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Blockchain network visualization" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-devura-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-devura-cyan">118+</div>
              <div className="text-gray-400">Active Subnets</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-devura-electric">$2.8B</div>
              <div className="text-gray-400">TAO Market Cap</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-devura-light">21M</div>
              <div className="text-gray-400">Max TAO Supply</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-devura-cyan">∞</div>
              <div className="text-gray-400">AI Possibilities</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-devura-gray to-devura-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-devura-light bg-clip-text text-transparent">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Be the first to know when Devura launches on the Bittensor network. 
              Join our community of AI and blockchain innovators.
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="glass-effect rounded-2xl border-devura-blue/20">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-devura-black/50 border-devura-blue/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-devura-cyan focus:ring-2 focus:ring-devura-cyan/20"
                      required
                    />
                    <Button 
                      type="submit" 
                      disabled={signupMutation.isPending}
                      className="bg-gradient-to-r from-devura-blue to-devura-electric hover:from-devura-electric hover:to-devura-cyan px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                      {signupMutation.isPending ? "Subscribing..." : "Notify Me"}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </form>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12">
              <Button 
                size="icon"
                variant="ghost"
                className="w-12 h-12 glass-effect rounded-xl hover:bg-devura-blue/20 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-6 h-6 text-devura-light" />
              </Button>
              <Button 
                size="icon"
                variant="ghost"
                className="w-12 h-12 glass-effect rounded-xl hover:bg-devura-blue/20 transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 text-devura-light" />
              </Button>
              <Button 
                size="icon"
                variant="ghost"
                className="w-12 h-12 glass-effect rounded-xl hover:bg-devura-blue/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-devura-light" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-devura-black border-t border-devura-gray">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={devuraText} alt="Devura" className="h-6 object-contain" />
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Built on <span className="text-devura-cyan">Bittensor</span> • Powered by <span className="text-devura-electric">TAO</span>
              </p>
              <p className="text-gray-500 text-sm">
                © 2024 Devura. Decentralizing the future of AI.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
