import { toast } from "sonner";
import React from "react";

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      style: {
        background: "linear-gradient(135deg, #0a122bf9, #070d1ff0)",
        border: "1px solid #FF0052",
        color: "#ffffff",
        borderRadius: "14px",
        padding: "12px 16px",
        fontFamily: "var(--font-space-grotesk), sans-serif",
        display: "flex",
        alignItems: "center",
        gap: "12px", 
      },
      icon: React.createElement(
        "div",
        { className: "relative w-6 h-6 shrink-0 flex items-center justify-center" },
        React.createElement(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 50 50",
            className: "drop-shadow-[0_4px_10px_rgba(255,0,82,0.4)]",
          },
          React.createElement("circle", {
            cx: "25",
            cy: "25",
            r: "21",
            fill: "none",
            stroke: "url(#toastPurePinkGradient)",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeDasharray: "132",
            strokeDashoffset: "0",
            className: "animate-[toastCircle_0.6s_ease-in-out_forwards]",
          }),
          React.createElement("path", {
            d: "M15 25l7 7 13-13",
            fill: "none",
            stroke: "url(#toastPurePinkGradient)",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "35",
            strokeDashoffset: "35",
            className: "animate-[toastTick_0.4s_ease-in-out_0.4s_forwards]",
          }),
          React.createElement(
            "defs",
            null,
            React.createElement(
              "linearGradient",
              { id: "toastPurePinkGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
              React.createElement("stop", { offset: "0%", stopColor: "#ff2a75" }),
              React.createElement("stop", { offset: "100%", stopColor: "#d9004c" })
            )
          )
        )
      ),
    });
  },

  error: (message: string) => {
    toast.error(message, {
      style: {
        background: "linear-gradient(135deg, #0a122bf9, #070d1ff0)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#ffffff",
        borderRadius: "14px",
        padding: "12px 16px",
        fontFamily: "var(--font-space-grotesk), sans-serif",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      },
      icon: React.createElement(
        "div",
        {
          className:
            "w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0 text-red-400 text-xs font-bold animate-pulse",
        },
        "✕"
      ),
    });
  },

  info: (message: string) => {
    toast(message, {
      style: {
        background: "linear-gradient(135deg, #0a122bf9, #070d1ff0)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#ffffff",
        borderRadius: "14px",
        padding: "12px 16px",
        fontFamily: "var(--font-space-grotesk), sans-serif",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      },
      icon: React.createElement(
        "div",
        {
          className:
            "w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shrink-0 text-blue-400 text-xs font-bold animate-pulse",
        },
        "i"
      ),
    });
  },
};