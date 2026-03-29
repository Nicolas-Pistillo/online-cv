import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Habilidades Técnicas
        </h2>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* {profile.skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} level={skill.level} />
          ))} */}

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png" 
          alt="PHP" className='w-24' />

          <img src="https://vectorseek.com/wp-content/uploads/2025/11/Laravel-Logo-PNG-SVG-Vector-01.png" 
          alt="Laravel" className='w-32' />

          <img src="https://raw.githubusercontent.com/livewire/livewire/main/art/readme_logo.png" 
          alt="Livewire" className='w-36' />

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/960px-Unofficial_JavaScript_logo_2.svg.png" 
          alt="Javascript" className='w-16' />

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/3840px-Node.js_logo.svg.png" 
          alt="Nodejs" className='w-24' />

          <img src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" 
          alt="React" className='w-20' />

          <img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" 
          alt="Angular" className='w-36' />

          <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" 
          alt="Tailwindcss" className='w-24' />

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png " 
          alt="AWS" className='w-20' />

          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Docker_Logo.png" 
          alt="Docker" className='w-32' />

          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" 
          alt="Flutter" className='w-32' />

        </div>
      </div>
    </section>
  );
};

export default Skills;
