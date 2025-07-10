'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { globalStyles } from '../lib/styles';
import type { ProjectData } from '../lib/projects';

interface ProjectThumbnailProps {
  project: ProjectData;
  locale: 'en' | 'pt-BR';
  className?: string;
}

export default function ProjectThumbnail({ project, locale, className = '' }: ProjectThumbnailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Cycle through images
  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.images.length
      );
    }, project.cycleDuration * 1000);

    return () => clearInterval(interval);
  }, [project.images.length, project.cycleDuration]);

  const localizedTitle = project.title[locale];
  const localizedSubtitle = project.subtitle[locale];
  const currentImage = project.images[currentImageIndex];

  return (
    <Link href={`/${locale}/projects/${project.id}`}>
      <motion.div
        className={`
          group relative overflow-hidden cursor-pointer
          shadow-md hover:shadow-xl transition-shadow duration-300
          ${className}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={currentImage}
            alt={localizedTitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Image cycle indicator */}
        {project.images.length > 1 && (
          <div className="absolute top-3 right-3 flex space-x-1">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentImageIndex 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50'
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className={`absolute inset-0 ${globalStyles.overlayColor} flex items-center justify-center`}
            >
              <div className="text-center text-white p-6">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.2 }}
                  className="text-xl font-bold mb-2 drop-shadow-lg"
                >
                  {localizedTitle}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="text-sm opacity-90 drop-shadow"
                >
                  {localizedSubtitle}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <div className="bg-yellow-400 text-yellow-900 px-2 py-1 text-xs font-bold shadow-lg">
              ⭐ Featured
            </div>
          </div>
        )}

        {/* Year badge - hidden as requested */}
        {project.year && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-black text-white px-2 py-1 text-xs font-medium">
              {project.year}
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
