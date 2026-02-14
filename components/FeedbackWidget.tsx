"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback.trim()) return;

    // Simulate submission
    setSubmitted(true);
    setFeedback("");

    // Optional: auto-hide after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="mt-12 p-6 border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">
        Was this page helpful?
      </h3>

      <textarea
        data-testid="feedback-input"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback here..."
        className="w-full p-3 border rounded-md mb-4 dark:bg-gray-900 dark:border-gray-600"
        rows={4}
      />

      <button
        data-testid="feedback-submit"
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit Feedback
      </button>

      {submitted && (
        <p
          data-testid="feedback-success-message"
          className="mt-4 text-green-600 font-medium"
        >
          Thank you for your feedback!
        </p>
      )}
    </div>
  );
}
