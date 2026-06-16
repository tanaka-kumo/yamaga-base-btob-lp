"use client";

// Core Web Vitals（LCP/INP/CLS/TTFB/FCP）を計測し GA4 の web_vitals イベントへ送る。
// 計測ID未設定時は analytics.track 側でノーオペになる。
import { useEffect } from "react";
import { onCLS, onINP, onLCP, onTTFB, onFCP, type Metric } from "web-vitals";
import { track } from "@/lib/analytics";

function report(metric: Metric) {
  track("web_vitals", {
    metric: metric.name,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    rating: metric.rating,
    id: metric.id,
  });
}

export function WebVitals() {
  useEffect(() => {
    onCLS(report);
    onINP(report);
    onLCP(report);
    onTTFB(report);
    onFCP(report);
  }, []);
  return null;
}
