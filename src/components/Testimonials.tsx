import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

const BentoTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content: "This platform completely transformed how we handle our workflow. The automation features saved us 20+ hours per week and the interface is incredibly intuitive."
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager, InnovateCorp",
      content: "Outstanding customer support and a product that actually delivers on its promises. We've seen a 40% increase in team productivity since implementation."
    },
    {
      name: "Emily Watson",
      role: "Marketing Director, GrowthLab",
      content: "The analytics dashboard gives us insights we never had before. It's like having a crystal ball for our marketing campaigns."
    },
    {
      name: "David Kim",
      role: "CTO, StartupXYZ",
      content: "Seamless integration with our existing tools and rock-solid reliability. This is exactly what we needed to scale our operations."
    },
    {
      name: "Lisa Thompson",
      role: "Operations Lead, Efficiency Pro",
      content: "Game-changer for our remote team collaboration. The real-time features work flawlessly and everyone picked it up within days."
    },
    {
      name: "Alex Johnson",
      role: "Founder, Digital Solutions",
      content: "Best investment we've made for our business. The ROI was evident within the first month of using the platform."
    },
    {
      name: "Rachel Park",
      role: "VP of Sales, Revenue Boost",
      content: "Our sales team's efficiency skyrocketed after adopting this solution. The reporting features are particularly impressive."
    },
    {
      name: "James Wilson",
      role: "Head of Design, Creative Studio",
      content: "Clean, modern interface that our entire team loves using. It's rare to find software that's both powerful and genuinely enjoyable to use."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by thousands of teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why companies of all sizes trust us to power their growth
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Large testimonial - spans 2 columns */}
          <TestimonialCard 
            testimonial={testimonials[0]} 
            className="lg:col-span-2 lg:row-span-1"
          />
          
          {/* Regular testimonial */}
          <TestimonialCard 
            testimonial={testimonials[1]} 
            className="lg:col-span-1"
          />
          
          {/* Tall testimonial - spans 2 rows */}
          <TestimonialCard 
            testimonial={testimonials[2]} 
            className="lg:col-span-1 lg:row-span-2"
          />
          
          {/* Regular testimonial */}
          <TestimonialCard 
            testimonial={testimonials[3]} 
            className="lg:col-span-1"
          />
          
          {/* Regular testimonial */}
          <TestimonialCard 
            testimonial={testimonials[4]} 
            className="lg:col-span-1"
          />
          
          {/* Wide testimonial - spans 2 columns */}
          <TestimonialCard 
            testimonial={testimonials[5]} 
            className="lg:col-span-2"
          />
          
          {/* Regular testimonial */}
          <TestimonialCard 
            testimonial={testimonials[6]} 
            className="lg:col-span-1"
          />
          
          {/* Regular testimonial */}
          <TestimonialCard 
            testimonial={testimonials[7]} 
            className="lg:col-span-1"
          />
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Join thousands of happy customers
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoTestimonials;