import React, { useState } from 'react';
import { QrCode, Calculator, CheckCircle2, XCircle, RefreshCw, Plus, Trash2, ArrowRight } from 'lucide-react';

interface Props {
  demoId: 'qr-scanner' | 'grade-calculator' | 'voting-checker';
  onClose: () => void;
}

export const InteractiveDemos: React.FC<Props> = ({ demoId, onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
              {demoId === 'qr-scanner' && <QrCode className="w-5 h-5" />}
              {demoId === 'grade-calculator' && <Calculator className="w-5 h-5" />}
              {demoId === 'voting-checker' && <CheckCircle2 className="w-5 h-5" />}
            </span>
            <div>
              <h3 className="font-semibold text-slate-900 text-base">
                {demoId === 'qr-scanner' && 'QR Scanner & Processor'}
                {demoId === 'grade-calculator' && 'Student Grade Calculator'}
                {demoId === 'voting-checker' && 'Voting Eligibility Checker'}
              </h3>
              <p className="text-xs text-slate-500">Interactive Project Simulation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close interactive demo"
          >
            <span className="text-xl font-bold leading-none">&times;</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700">
          {demoId === 'qr-scanner' && <QrScannerDemo />}
          {demoId === 'grade-calculator' && <GradeCalculatorDemo />}
          {demoId === 'voting-checker' && <VotingCheckerDemo />}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-500">
          <span>Project built for Web Development learning</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors text-xs font-medium"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// 1. QR Scanner Demo
function QrScannerDemo() {
  const [inputVal, setInputVal] = useState('https://github.com/dharan-031');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'scanned'>('scanned');
  const [scannedOutput, setScannedOutput] = useState('https://github.com/dharan-031');

  const handleSimulateScan = () => {
    setScanState('scanning');
    setTimeout(() => {
      setScannedOutput(inputVal || 'Sample QR Code content: Verified');
      setScanState('scanned');
    }, 800);
  };

  // Safe public QR code image generation for live visualization
  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    inputVal || 'https://github.com/dharan-031'
  )}`;

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        This project demonstrates how web applications parse, generate, and process QR code streams.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="relative p-2 bg-white rounded-lg shadow-sm border border-slate-200 flex-shrink-0">
          <img
            src={qrImgUrl}
            alt="Sample QR code"
            className="w-36 h-36 object-contain"
            onError={(e) => {
              // Fallback simple graphic if offline
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {scanState === 'scanning' && (
            <div className="absolute inset-0 bg-indigo-500/20 border-2 border-indigo-600 rounded-lg animate-pulse flex items-center justify-center">
              <span className="text-xs bg-indigo-600 text-white font-medium px-2 py-0.5 rounded shadow">
                Scanning...
              </span>
            </div>
          )}
        </div>

        <div className="w-full space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              QR Code Payload / Content:
            </label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter text or URL to encode & scan"
              className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>

          <button
            onClick={handleSimulateScan}
            disabled={scanState === 'scanning'}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${scanState === 'scanning' ? 'animate-spin' : ''}`} />
            {scanState === 'scanning' ? 'Processing Stream...' : 'Simulate QR Scan'}
          </button>
        </div>
      </div>

      {scanState === 'scanned' && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Decoded Payload:
          </div>
          <p className="text-xs font-mono text-emerald-950 break-all bg-white p-2 rounded border border-emerald-100">
            {scannedOutput}
          </p>
        </div>
      )}
    </div>
  );
}

// 2. Grade Calculator Demo
function GradeCalculatorDemo() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Data Structures & Algorithms', marks: 88 },
    { id: 2, name: 'Web Fundamentals', marks: 92 },
    { id: 3, name: 'Mathematics I', marks: 85 },
  ]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now(), name: `Subject ${subjects.length + 1}`, marks: 80 },
    ]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const updateMarks = (id: number, marks: number) => {
    const clamped = Math.max(0, Math.min(100, isNaN(marks) ? 0 : marks));
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, marks: clamped } : s)));
  };

  const totalMarks = subjects.reduce((sum, s) => sum + s.marks, 0);
  const maxPossible = subjects.length * 100;
  const percentage = maxPossible > 0 ? (totalMarks / maxPossible) * 100 : 0;

  const getGrade = (pct: number) => {
    if (pct >= 90) return { grade: 'O (Outstanding)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (pct >= 80) return { grade: 'A+ (Excellent)', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
    if (pct >= 70) return { grade: 'A (Very Good)', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (pct >= 60) return { grade: 'B+ (Good)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    if (pct >= 50) return { grade: 'B (Above Average)', color: 'text-orange-700 bg-orange-50 border-orange-200' };
    return { grade: 'RA (Re-appear)', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const currentGrade = getGrade(percentage);

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Enter subject marks out of 100 to compute total marks, percentage, and assigned academic grade.
      </p>

      <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
        {subjects.map((sub, index) => (
          <div
            key={sub.id}
            className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
          >
            <span className="text-slate-400 font-mono w-5">#{index + 1}</span>
            <input
              type="text"
              value={sub.name}
              onChange={(e) => {
                const val = e.target.value;
                setSubjects(subjects.map((s) => (s.id === sub.id ? { ...s, name: val } : s)));
              }}
              className="flex-1 px-2.5 py-1.5 rounded border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
            />
            <div className="flex items-center gap-1">
              <input
                type="number"
                min="0"
                max="100"
                value={sub.marks}
                onChange={(e) => updateMarks(sub.id, parseInt(e.target.value) || 0)}
                className="w-16 px-2 py-1.5 rounded border border-slate-300 bg-white text-right font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <span className="text-slate-500">/100</span>
            </div>
            {subjects.length > 1 && (
              <button
                onClick={() => removeSubject(sub.id)}
                className="text-slate-400 hover:text-rose-600 p-1 rounded"
                title="Remove course"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={addSubject}
        className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium"
      >
        <Plus className="w-3.5 h-3.5" /> Add Another Subject
      </button>

      {/* Results Box */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 bg-white rounded-lg border border-slate-100">
            <span className="text-slate-500 block">Total Marks</span>
            <span className="font-semibold text-slate-800 text-sm">
              {totalMarks} / {maxPossible}
            </span>
          </div>
          <div className="p-2 bg-white rounded-lg border border-slate-100">
            <span className="text-slate-500 block">Percentage</span>
            <span className="font-semibold text-indigo-600 text-sm">
              {percentage.toFixed(1)}%
            </span>
          </div>
          <div className="p-2 bg-white rounded-lg border border-slate-100">
            <span className="text-slate-500 block">Grade</span>
            <span className="font-semibold text-slate-800 text-sm">
              {currentGrade.grade.split(' ')[0]}
            </span>
          </div>
        </div>

        <div className={`p-2.5 rounded-lg border text-xs text-center font-medium ${currentGrade.color}`}>
          Overall Result: {currentGrade.grade}
        </div>
      </div>
    </div>
  );
}

// 3. Voting Eligibility Checker Demo
function VotingCheckerDemo() {
  const [age, setAge] = useState<number>(18);
  const [hasVoterId, setHasVoterId] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(true);

  const isEligible = age >= 18;

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Tests beginner conditional branching logic to verify voting eligibility based on statutory age criteria.
      </p>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
        <div>
          <label className="block font-medium text-slate-700 mb-1">
            Applicant Age (Years):
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="10"
              max="100"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="flex-1 accent-indigo-600"
            />
            <span className="w-12 text-center py-1 bg-white border border-slate-300 rounded font-semibold font-mono text-sm text-slate-800">
              {age}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            id="voterId"
            type="checkbox"
            checked={hasVoterId}
            onChange={(e) => setHasVoterId(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="voterId" className="text-slate-700 select-none cursor-pointer">
            Has valid citizen registration / identity proof
          </label>
        </div>

        <button
          onClick={() => setChecked(true)}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-1.5"
        >
          Check Eligibility
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {checked && (
        <div
          className={`p-4 rounded-xl border ${
            isEligible
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}
        >
          <div className="flex items-center gap-2 font-semibold text-sm mb-1">
            {isEligible ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Status: Eligible to Vote!
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-amber-600" />
                Status: Not Yet Eligible
              </>
            )}
          </div>
          <p className="text-xs">
            {isEligible
              ? `At ${age} years old, the applicant meets the legal voting age threshold (18+). ${
                  hasVoterId
                    ? 'All registration prerequisites are satisfied.'
                    : 'Remember to complete official voter enrollment before election day.'
                }`
              : `At ${age} years old, the applicant needs ${
                  18 - age
                } more year(s) to reach the statutory voting threshold of 18.`}
          </p>
        </div>
      )}
    </div>
  );
}
