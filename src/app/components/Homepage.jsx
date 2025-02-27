import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Clients from "./Clients";
import Features from "./Features";
import { Testimonials } from "./Testimonials";
import FeaturesHighlight from "./FeaturesHighlight";
import ProductShowcase from "./ProductShowcase";
import TestimonialSection from "./TestimonialSection";
import VideoSection from "./VideoSection";
import ShapedCard from "./ShapedCard";
import Banner2 from "./Banner2";
import Team from "./Team";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar: "/images/person.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    avatar: "/images/person2.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avatar: "/images/person.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    avatar: "/images/person2.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    avatar: "/images/person.png",
  },
];
function Homepage() {
  return (
    <div className="">
      {/* <Hero /> */}
      <Banner2 />
      {/* <Banner /> */}
      <div className="px-20">
        <Features />
        <FeaturesHighlight />
        <ProductShowcase />
        {/* <TestimonialSection /> */}
        <VideoSection />
        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <Testimonials items={testimonials} direction="right" speed="slow" />
        </div>
        <Team />
        {/* <ShapedCard /> */}
        {/* <Clients /> */}
      </div>
    </div>
  );
}

export default Homepage;
