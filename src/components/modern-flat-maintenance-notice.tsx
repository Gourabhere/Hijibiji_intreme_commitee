"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Shield, Sparkles, Wrench, Package, Camera, CheckCircle, CreditCard, Bell, Star, ArrowRight, Users } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function ModernFlatMaintenanceNotice() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Security Coverage",
      description: "Trained guards will patrol around your block. Your car parked outside will be safe. Unauthorized entry or damage will be monitored and prevented.",
      additionalInfo: "",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Sparkles,
      title: "Cleaning & Upkeep Lobby area and staircase",
      description: "The front door and lobby area of your flat will be cleaned. Cobwebs, dust and trash will be cleared periodically.",
      additionalInfo: "",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Wrench,
      title: "Flat Access for Work",
      description: "Monitored access for workers needing entry to complete work in your flat or neighboring units.",
      additionalInfo: "",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
        icon: Package,
        title: "Parcel & Delivery Handling",
        description: "If delivery reaches your flat anytime to complete pending interior or repair work, supervised entry will ensure nothing goes wrong.",
        additionalInfo: "",
        color: "from-amber-500 to-yellow-500",
        bgColor: "bg-amber-50",
    },
    {
      icon: Camera,
      title: "Flat Monitoring (Coming Soon)",
      description: "Monitoring of CC camera footage in real time.",
      additionalInfo: "",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    }
  ];

  const benefits = [
    { icon: "🧠", text: "Peace of mind" },
    { icon: "✨", text: "Cleanliness" },
    { icon: "🤝", text: "Continued support" },
    { icon: "🔐", text: "Security & accountability" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 font-body overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-200 to-teal-200 rounded-full opacity-20 blur-xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-20 blur-xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Home className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            Attention: Hijibiji Registered Flat Owners
          </h1>
          <div className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-lg md:text-xl font-semibold">
              Contribute to Hijibiji's Maintenance & Security for Your Safety and Comfort
            </p>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
          variants={itemVariants}
        >
          {/* Services Section */}
          <div className="p-8">
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={itemVariants}
            >
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why You Should Start Paying Maintenance Now
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className={cn("relative p-6 rounded-2xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:shadow-xl", service.bgColor)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onHoverStart={() => setActiveService(index)}
                    onHoverEnd={() => setActiveService(null)}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <AnimatePresence>
                          {activeService === index && service.additionalInfo && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-muted-foreground text-sm mt-2 leading-relaxed"
                            >
                              {service.additionalInfo}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <motion.div
            className="bg-secondary p-8 border-t border-border"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-8 h-8 text-accent" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Your Contribution Matters!
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              By paying your share, you're ensuring:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <p className="text-sm font-medium text-foreground">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interim Committee Section */}
          <motion.div
            className="bg-card p-8 border-t border-border"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Hijibiji Interim Committee
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground text-base">
              <div><span className="font-semibold text-foreground">President:</span> Dhruba Nan</div>
              <div><span className="font-semibold text-foreground">Secretary:</span> Gourab Saha</div>
              <div><span className="font-semibold text-foreground">Jt. Secretary:</span> Safiullah  Shaikh</div>
              <div><span className="font-semibold text-foreground">Treasurer:</span> Panchami Roy</div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-foreground">Members:</span>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Nirmalendu Ray</li>
                  <li>Shuvayu Ghosh</li>
                  <li>Sayan Banerjee</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground"
            variants={itemVariants}
          >
            <div className="text-center">
              <motion.div
                className="inline-flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <CreditCard className="w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Start your contribution today to avoid disruptions
                </h2>
              </motion.div>
              <motion.button
                className="bg-primary-foreground text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPaymentModal(true)}
              >
                <Sparkles className="w-5 h-5" />
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>


        </motion.div>
      </motion.div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              className="bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Cast Your Vote!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join the WhatsApp poll to make your voice heard in the community. Your participation is important!
                </p>
                <motion.a
                  href="https://chat.whatsapp.com/DdCuvm0fKYA4IPjVMicCSY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-xl font-bold w-full hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ✅ Vote Now on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
