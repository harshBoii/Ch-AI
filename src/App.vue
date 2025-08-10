<template>
  <div class="relative bg-slate-50 text-slate-800 w-full flex font-sans min-h-screen overflow-x-hidden">

    <div
      v-if="isSidebarOpen || isDatasetsPanelOpen"
      @click="isSidebarOpen = false; isDatasetsPanelOpen = false"
      class="fixed inset-0 bg-black/60 z-20 lg:hidden"
    ></div>

    <aside
      class="fixed inset-y-0 left-0 bg-slate-800 text-slate-200 w-64 p-6 flex flex-col justify-between transform -translate-x-full transition-transform duration-300 ease-in-out z-30 lg:relative lg:translate-x-0 lg:flex-shrink-0"
      :class="{ 'translate-x-0': isSidebarOpen }"
    >
      <div>
        <div class="flex items-center gap-3 mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h1 class="text-2xl font-bold tracking-wider text-white">CH-AI</h1>
        </div>
        <nav class="space-y-2">
          <button class="flex items-center gap-3 w-full p-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17 10a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v4zM17 12a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2zM5 10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v4zM5 12a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2h2z" /></svg>
            Brew a Report
          </button>
          <button class="flex items-center gap-3 w-full p-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
            Sip on Trends
          </button>
          <button class="flex items-center gap-3 w-full p-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 14.95a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM4.343 5.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM2 10a1 1 0 01-1 1H0a1 1 0 110-2h1a1 1 0 011 1zM14.95 14.95a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM10 5a5 5 0 00-5 5h10a5 5 0 00-5-5z" /></svg>
            Sweeten Insights
          </button>
          <button class="flex items-center gap-3 w-full p-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7 2a.5.5 0 01.5.5V4a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V2.5a.5.5 0 01.5-.5h1zM6 4.5A.5.5 0 016.5 4h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7 7a.5.5 0 01.5.5V10a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V7.5a.5.5 0 01.5-.5h1zM6 10.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7 13a.5.5 0 01.5.5V15a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5h1zM6 15.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM13 2a2 2 0 00-2 2v1H9.5a1.5 1.5 0 00-1.415 1.032L6.16 10.387a2.502 2.502 0 001.12 2.89l1.44 1.028a1 1 0 01.52.885V18a2 2 0 002 2h2a2 2 0 002-2v-2.81a1 1 0 01.52-.885l1.44-1.028a2.5 2.5 0 001.12-2.89l-1.926-4.352A1.5 1.5 0 0014.5 5H13V4a2 2 0 00-2-2h-2z" clip-rule="evenodd" /></svg>
            Custom Blend
          </button>
        </nav>
      </div>
      <div class="text-xs text-slate-500">
        © 2025 CH-AI — Brewing Insights
      </div>
    </aside>

    <main class="flex-1 flex flex-col w-full">
      <header class="flex justify-between items-center px-4 sm:px-8 py-4 border-b border-slate-200 bg-white flex-shrink-0">
        <div class="flex items-center gap-3">
          <button @click="isSidebarOpen = true" class="p-1 text-slate-600 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h2 class="text-xl lg:text-2xl font-bold text-slate-800">
            CH-AI Agent
          </h2>
        </div>
        <div class="flex items-center gap-2 sm:gap-4">
          <button class="hidden sm:block bg-white text-slate-700 px-4 py-2 rounded-md text-sm font-medium border border-slate-300 hover:bg-slate-50 transition-colors">
            Settings
          </button>
          <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
           <button @click="isDatasetsPanelOpen = true" class="p-1 text-slate-600 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M10 2C6.134 2 3 3.343 3 5s3.134 3 7 3 7-1.343 7-3-3.134-3-7-3z" /></svg>
          </button>
        </div>
      </header>

      <div class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex flex-col p-4 sm:p-6 h-full">
          <div class="flex-1 bg-white rounded-lg border border-slate-200 p-4 overflow-y-auto shadow-sm">
            <div v-if="isLoading" class="flex flex-col items-center justify-center h-full gap-4 text-slate-500">
              <svg class="animate-spin h-8 w-8 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="italic">Brewing your analysis…</span>
            </div>
            <div v-else-if="error" class="text-red-600 font-medium p-4 bg-red-50 rounded-lg">
              <p class="font-bold">An Error Occurred</p>
              <p>{{ error }}</p>
            </div>
            <div v-else-if="response" class="space-y-4">
              <div class="flex gap-3 items-start">
                <div class="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0"></div>
                <div class="bg-slate-100 p-3 sm:p-4 rounded-lg rounded-tl-none shadow-sm max-w-full overflow-x-auto">
                  <pre class="whitespace-pre-wrap text-sm font-sans text-slate-700">{{ response }}</pre>
                </div>
              </div>
            </div>
            <div v-else class="flex flex-col h-full items-center justify-center text-center text-slate-500">
              <h3 class="text-xl font-semibold">Welcome to CH-AI ☕</h3>
              <p class="mt-1">Ask a question to begin analysis.</p>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="mt-4 flex items-center gap-2 sm:gap-3">
            <input type="file" ref="fileInput" @change="handleFileChange" class="hidden"/>
            <button
              type="button"
              @click="triggerFileSelect"
              class="flex-shrink-0 p-2 rounded-md border border-slate-300 bg-white hover:bg-slate-100 transition-colors"
              :class="{ 'bg-sky-100 border-sky-300': attachment }"
              title="Attach a file"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a3 3 0 10-6 0v4a1 1 0 102 0V7a1 1 0 112 0v4a3 3 0 11-6 0V7a5 5 0 0110 0v4a5 5 0 01-10 0V7a3 3 0 00-3-3z" clip-rule="evenodd" /></svg>
            </button>
            <input
              v-model="input"
              placeholder="Ask CH-AI anything…"
              class="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              :disabled="isLoading"
            />
            <button
              type="submit"
              class="bg-sky-600 text-white p-2 rounded-md hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
              :disabled="isLoading || !input.trim()"
              title="Send"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </form>
          <div v-if="attachment" class="text-xs text-slate-500 pt-2 pl-14">
            Attached: <span class="font-semibold text-slate-600">{{ attachment.name }}</span>
          </div>
        </div>

        <aside
          class="fixed inset-y-0 right-0 bg-slate-50 w-72 border-l border-slate-200 p-4 overflow-y-auto transform translate-x-full transition-transform duration-300 ease-in-out z-30 lg:relative lg:translate-x-0 lg:flex-shrink-0"
          :class="{ 'translate-x-0': isDatasetsPanelOpen }"
        >
          <h3 class="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M10 2C6.134 2 3 3.343 3 5s3.134 3 7 3 7-1.343 7-3-3.134-3-7-3z" /></svg>
            Loaded Datasets
          </h3>
          <div v-if="datasets.length" class="space-y-3">
            <div
              v-for="(data, idx) in datasets"
              :key="idx"
              class="bg-white p-3 rounded-lg shadow-sm border border-slate-200"
            >
              <p class="font-semibold text-sm text-slate-800">{{ data.name }}</p>
              <p class="text-xs text-slate-500">{{ data.rows }} rows, {{ data.cols }} cols</p>
              <div class="flex gap-2 mt-3">
                <button class="bg-slate-100 px-2.5 py-1 text-xs font-medium rounded-md hover:bg-slate-200 transition-colors">Refill</button>
                <button class="text-red-600 px-2.5 py-1 text-xs font-medium rounded-md hover:bg-red-50 transition-colors">Spill</button>
              </div>
            </div>
          </div>
          <div v-else class="text-sm text-slate-500 italic text-center py-8">
            No datasets loaded.
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue';

// State for controlling mobile sidebar visibility
const isSidebarOpen = ref(false);
const isDatasetsPanelOpen = ref(false);

const input = ref('');
const attachment = ref(null);
const response = ref('');
const isLoading = ref(false);
const error = ref('');
const fileInput = ref(null);

const datasets = ref([
  { name: 'sales_q3_2025.csv', rows: 1024, cols: 8 },
  { name: 'customer_feedback.xlsx', rows: 512, cols: 12 },
]);

function triggerFileSelect() {
  fileInput.value.click();
}

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    attachment.value = file;
  }
}

async function handleSubmit() {
  if (!input.value.trim()) return;

  isLoading.value = true;
  response.value = '';
  error.value = '';

  const formData = new FormData();
  
  // --- CHANGE 1: Convert the input text to a file-like Blob ---
  // The backend expects the question as a file, not a text field.
  const questionBlob = new Blob([input.value], { type: 'text/plain' });
  formData.append('question_file', questionBlob, 'question.txt');

  // --- CHANGE 2: Use the key 'attachment' for the data file ---
  // The backend expects the optional data file to have the key 'attachment'.
  if (attachment.value) {
    formData.append('attachment', attachment.value);
  }

  // API call logic remains the same, but now sends data in the correct format.
  try {
    const res = await fetch('https://data-analysis-agent-1lrc.onrender.com/api', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
    }

    const data = await res.json();

    if (data.error) {
      error.value = data.error;
    } else {
      response.value = data.output;
    }
  } catch (err) {
    error.value = `Failed to connect to the agent. Details: ${err.message}`;
  } finally {
    isLoading.value = false;
  }
}
</script>
