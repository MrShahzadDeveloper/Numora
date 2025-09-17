"use client";
import React, { useState } from "react";
import { Shapes } from "lucide-react";

export default function GeometryCalculator() {
  const [shape, setShape] = useState("square");
  const [side, setSide] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClear = () => {
    setSide("");
    setLength("");
    setWidth("");
    setRadius("");
    setHeight("");
    setResult("");
  };

  const calculate = () => {
    switch (shape) {
      case "square":
        if (!side) return setResult("Enter side");
        setResult(
          `Area: ${(parseFloat(side) ** 2).toFixed(2)}, Perimeter: ${
            4 * parseFloat(side)
          }`
        );
        break;
      case "rectangle":
        if (!length || !width) return setResult("Enter length and width");
        setResult(
          `Area: ${(parseFloat(length) * parseFloat(width)).toFixed(
            2
          )}, Perimeter: ${(2 * (parseFloat(length) + parseFloat(width))).toFixed(
            2
          )}`
        );
        break;
      case "circle":
        if (!radius) return setResult("Enter radius");
        const r = parseFloat(radius);
        setResult(
          `Area: ${(Math.PI * r * r).toFixed(2)}, Circumference: ${(2 *
            Math.PI *
            r).toFixed(2)}`
        );
        break;
      case "triangle":
        if (!length || !height) return setResult("Enter base and height");
        setResult(
          `Area: ${(0.5 * parseFloat(length) * parseFloat(height)).toFixed(2)}`
        );
        break;
      case "cube":
        if (!side) return setResult("Enter side");
        const s = parseFloat(side);
        setResult(
          `Volume: ${(s ** 3).toFixed(2)}, Surface Area: ${(6 * s * s).toFixed(
            2
          )}`
        );
        break;
      case "cuboid":
        if (!length || !width || !height)
          return setResult("Enter length, width, height");
        setResult(
          `Volume: ${(parseFloat(length) * parseFloat(width) * parseFloat(
            height
          )).toFixed(2)}, Surface Area: ${(
            2 *
            (parseFloat(length) * parseFloat(width) +
              parseFloat(length) * parseFloat(height) +
              parseFloat(width) * parseFloat(height))
          ).toFixed(2)}`
        );
        break;
      case "sphere":
        if (!radius) return setResult("Enter radius");
        const rad = parseFloat(radius);
        setResult(
          `Volume: ${(4 / 3 * Math.PI * rad ** 3).toFixed(
            2
          )}, Surface Area: ${(4 * Math.PI * rad ** 2).toFixed(2)}`
        );
        break;
      default:
        setResult("Select shape");
    }
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Shapes className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Geometry Calculator
          </h1>
        </div>

        {/* Shape Selector */}
        <div className="mb-4">
          <label className="block text-slate-700 mb-2 font-medium">
            Select Shape
          </label>
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
          >
            <option value="square">Square</option>
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
            <option value="cube">Cube</option>
            <option value="cuboid">Cuboid</option>
            <option value="sphere">Sphere</option>
          </select>
        </div>

        {/* Inputs */}
        <div className="grid gap-3 mb-4">
          {(shape === "square" || shape === "cube") && (
            <input
              type="number"
              placeholder="Side"
              value={side}
              onChange={(e) => setSide(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
            />
          )}
          {(shape === "rectangle" || shape === "cuboid") && (
            <>
              <input
                type="number"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
              />
              <input
                type="number"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
              />
            </>
          )}
          {shape === "triangle" && (
            <>
              <input
                type="number"
                placeholder="Base"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
              />
              <input
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
              />
            </>
          )}
          {(shape === "circle" || shape === "sphere") && (
            <input
              type="number"
              placeholder="Radius"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
            />
          )}
          {shape === "cuboid" && (
            <input
              type="number"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400"
            />
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition mb-3"
        >
          Calculate
        </button>

        {/* Result */}
        {result !== "" && (
          <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center font-medium text-slate-700">
            {result}
          </div>
        )}

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="w-full mt-4 py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
