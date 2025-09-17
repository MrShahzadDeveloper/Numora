"use client";
import React, { useState } from "react";
import { Percent } from "lucide-react";

export default function AlgebraCalculator() {
  const [expression, setExpression] = useState("");
  const [linearA, setLinearA] = useState("");
  const [linearB, setLinearB] = useState("");
  const [linearC, setLinearC] = useState("");
  const [quadA, setQuadA] = useState("");
  const [quadB, setQuadB] = useState("");
  const [quadC, setQuadC] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClear = () => {
    setExpression("");
    setLinearA("");
    setLinearB("");
    setLinearC("");
    setQuadA("");
    setQuadB("");
    setQuadC("");
    setResult("");
  };

  const handleEvaluateExpression = () => {
    try {
      const evalResult = Function("return " + expression)();
      setResult(evalResult);
    } catch {
      setResult("Invalid expression");
    }
  };

  const solveLinear = () => {
    if (!linearA || !linearB || !linearC) {
      setResult("Enter all coefficients");
      return;
    }
    const a = parseFloat(linearA);
    const b = parseFloat(linearB);
    const c = parseFloat(linearC);
    if (a === 0) {
      setResult("a cannot be 0");
      return;
    }
    const x = (c - b) / a;
    setResult(`x = ${x}`);
  };

  const solveQuadratic = () => {
    if (!quadA || !quadB || !quadC) {
      setResult("Enter all coefficients");
      return;
    }
    const a = parseFloat(quadA);
    const b = parseFloat(quadB);
    const c = parseFloat(quadC);
    const discriminant = b * b - 4 * a * c;

    if (a === 0) {
      setResult("a cannot be 0");
      return;
    }

    if (discriminant < 0) {
      setResult("No real roots");
      return;
    }

    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    setResult(`Roots: ${root1}, ${root2}`);
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Percent className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Algebra Calculator
          </h1>
        </div>

        {/* Expression Evaluation */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Evaluate expression (e.g., 2+3*5)"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
          />
          <button
            onClick={handleEvaluateExpression}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition mb-3"
          >
            Evaluate Expression
          </button>
        </div>

        {/* Linear Equation */}
        <div className="mb-4">
          <p className="text-slate-700 font-medium mb-2">Solve Linear: ax + b = c</p>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <input
              type="number"
              placeholder="a"
              value={linearA}
              onChange={(e) => setLinearA(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="number"
              placeholder="b"
              value={linearB}
              onChange={(e) => setLinearB(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="number"
              placeholder="c"
              value={linearC}
              onChange={(e) => setLinearC(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            onClick={solveLinear}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition mb-3"
          >
            Solve Linear
          </button>
        </div>

        {/* Quadratic Equation */}
        <div className="mb-4">
          <p className="text-slate-700 font-medium mb-2">Solve Quadratic: ax² + bx + c = 0</p>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <input
              type="number"
              placeholder="a"
              value={quadA}
              onChange={(e) => setQuadA(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="number"
              placeholder="b"
              value={quadB}
              onChange={(e) => setQuadB(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="number"
              placeholder="c"
              value={quadC}
              onChange={(e) => setQuadC(e.target.value)}
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            onClick={solveQuadratic}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Solve Quadratic
          </button>
        </div>

        {/* Result */}
        {result !== "" && (
          <div className="mt-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center font-medium text-slate-700">
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
