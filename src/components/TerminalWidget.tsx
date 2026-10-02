'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system';
  text: string;
  isJson?: boolean;
}

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState('');
  const lineCounter = useRef(10);
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      text: 'anmol-runtime v2.4.0 (x86_64-linux-gnu, node v22.20.0)',
    },
    {
      id: 'init-2',
      type: 'system',
      text: 'Type "help" or click one of the quick command buttons below.',
    },
    {
      id: 'init-3',
      type: 'input',
      text: 'curl -s http://localhost:8080/health',
    },
    {
      id: 'init-4',
      type: 'output',
      text: JSON.stringify(
        {
          status: 'UP',
          service: 'portfolio-backend-telemetry',
          runtime: 'Node.js + TypeScript',
          cacheEngine: 'Redis LRU (HitRatio: 88.4%)',
          database: 'MongoDB (Pool: 10/10 active)',
          uptime: '99.98%',
        },
        null,
        2
      ),
      isJson: true,
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    lineCounter.current += 1;
    const inputId = `line-in-${lineCounter.current}`;

    const lower = trimmed.toLowerCase();
    const newHistory: TerminalLine[] = [
      ...history,
      { id: inputId, type: 'input', text: trimmed },
    ];

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputText = '';
    let isJson = false;

    if (lower === 'help') {
      outputText = `Available commands:
  • whoami           - Developer profile & engineering identity
  • curl /health     - System health check probe
  • cache stats      - ProxyCache hit/miss telemetry
  • projects         - List key backend engineering projects
  • skills           - Core backend stack & tools
  • dsa              - Data Structures & Algorithms metrics
  • contact          - Direct contact channels
  • clear            - Wipe terminal buffer`;
    } else if (lower === 'whoami') {
      outputText = JSON.stringify(
        {
          name: 'Anmol',
          title: 'Backend-focused Software Developer',
          degree: 'B.Tech CSE (AIML) - Galgotias College of Eng & Tech (2027)',
          location: 'Noida, Uttar Pradesh, India',
          coreFocus: 'REST APIs, Caching (Redis), Queues (BullMQ), DB Architecture',
          dsaProblemsSolved: '500+ across LeetCode, GFG, CodeChef',
        },
        null,
        2
      );
      isJson = true;
    } else if (lower.includes('health')) {
      outputText = JSON.stringify(
        {
          status: 'UP',
          timestamp: new Date().toISOString(),
          httpCode: 200,
          services: {
            redis: 'CONNECTED (Latency: 1.2ms)',
            mongodb: 'CONNECTED (Latency: 4.8ms)',
            bullmqWorkers: '3 ACTIVE (0 in DLQ)',
          },
        },
        null,
        2
      );
      isJson = true;
    } else if (lower.includes('cache') || lower.includes('stats')) {
      outputText = JSON.stringify(
        {
          engine: 'ProxyCache LRU v1.0',
          totalRequests: 4361,
          cacheHits: 3841,
          cacheMisses: 520,
          hitRatio: '88.08%',
          memoryRSS: '124MB / 512MB capacity',
          evictionPolicy: 'Least-Recently-Used (LRU)',
        },
        null,
        2
      );
      isJson = true;
    } else if (lower === 'projects') {
      outputText = `1. ApplyTrack API       [REST API, Node/Express, Redis, MongoDB, Docker, RBAC]
2. ProxyCache           [HTTP Caching Proxy, LRU Engine, ETag, Cache-Control]
3. Notification Service [BullMQ, Redis Queues, Nodemailer, Exponential Backoff]
4. URL Shortener        [Next.js App Router, NanoID, MongoDB Aggregations]
5. Crypto Ticker        [WebSockets, Socket.IO, Custom Node Server, Caching]`;
    } else if (lower === 'skills') {
      outputText = `LANGUAGES:     TypeScript, JavaScript (ES6+), Java, SQL
BACKEND:       Node.js, Express.js, REST APIs, Next.js, GraphQL
STORAGE:       MongoDB, Redis, MySQL
DEVOPS:        Docker, Docker Compose, Linux, Git, GitHub Actions, AWS
FOUNDATIONS:   DSA (500+ solved), System Design, OOP, Microservices`;
    } else if (lower === 'dsa') {
      outputText = JSON.stringify(
        {
          solved: '500+ Data Structures & Algorithms problems',
          platforms: ['LeetCode', 'GeeksforGeeks', 'CodeChef'],
          topTopics: ['Dynamic Programming', 'Graph Algorithms', 'Trees & Heaps', 'Sliding Window', 'Greedy'],
          hackathons: 'Runner-up at HACKBASE 2026',
        },
        null,
        2
      );
      isJson = true;
    } else if (lower === 'contact') {
      outputText = `Email:    anmolsri520@gmail.com
GitHub:   https://github.com/anmol520
LinkedIn: https://linkedin.com/in/anmol-srivastava-005084294
Location: Noida, Uttar Pradesh, India`;
    } else {
      outputText = `zsh: command not found: ${trimmed}. Type "help" for a list of valid commands.`;
    }

    lineCounter.current += 1;
    const outputId = `line-out-${lineCounter.current}`;

    newHistory.push({
      id: outputId,
      type: 'output',
      text: outputText,
      isJson,
    });

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const quickChips = ['help', 'whoami', 'curl /health', 'cache stats', 'projects', 'dsa'];

  return (
    <div className="w-full rounded-xl bg-[#0c0e14] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#12161f] border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-600/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block border border-yellow-600/40" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
          </div>
          <span className="ml-2 text-zinc-400 font-mono text-xs flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            bash — anmol@node-runtime:~
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LISTEN :8080</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 max-h-[320px] overflow-y-auto space-y-2.5 selection:bg-cyan-500/30">
        {history.map((line) => {
          if (line.type === 'system') {
            return (
              <div key={line.id} className="text-zinc-500 italic">
                # {line.text}
              </div>
            );
          }
          if (line.type === 'input') {
            return (
              <div key={line.id} className="flex items-center gap-2 text-slate-200">
                <span className="text-cyan-400 font-semibold">$</span>
                <span>{line.text}</span>
              </div>
            );
          }
          return (
            <div
              key={line.id}
              className={`pl-4 whitespace-pre-wrap leading-relaxed ${
                line.isJson ? 'text-emerald-400 font-mono text-[11px] bg-zinc-950/60 p-2.5 rounded border border-zinc-800/60' : 'text-zinc-300'
              }`}
            >
              {line.text}
            </div>
          );
        })}
        <div ref={endRef} />
      </div>

      {/* Quick Execution Chips */}
      <div className="px-4 py-2 bg-zinc-950/80 border-t border-zinc-900 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] uppercase text-zinc-500 font-mono mr-1">Quick Run:</span>
        {quickChips.map((chip) => (
          <button
            key={chip}
            onClick={() => executeCommand(chip)}
            className="px-2 py-0.5 text-[11px] text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-cyan-300 border border-zinc-800 rounded transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Prompt */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#090b10] border-t border-zinc-800/80">
        <span className="text-cyan-400 font-semibold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' or any command..."
          className="flex-1 bg-transparent text-slate-200 focus:outline-none font-mono text-xs placeholder:text-zinc-600"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          className="p-1 text-zinc-400 hover:text-cyan-400 transition-colors"
          title="Execute Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
