<template>
  <div class="wellbeing-container">
    <div class="quiz-header">
      <h1 class="quiz-title">🌈 幸福小测验</h1>
      <p class="quiz-subtitle">基于哈佛大学幸福模型 · 探索你的幸福指数</p>
    </div>

    <div class="instructions">
      <div class="instructions-header">
        <h3>📋 问卷说明</h3>
        <button class="toggle-btn" @click="showInstructions = !showInstructions">
          {{ showInstructions ? '收起' : '展开' }}
        </button>
      </div>
      <div v-show="showInstructions" class="instructions-content">
        <p>Well-being幸福小问卷，经授权采用了哈佛大学的幸福模型，它或许能帮助你解锁对自身状态的新认知，也会为公司持续支持大家身心健康提供宝贵输入。</p>
        <p>此问卷不是为了探究个人的心理状态，因此不会出具个人报告或团队报告，所有回答都会做匿名处理，请轻松、真实地与自己对话吧~🤫</p>
        <p><strong>评分说明：</strong>请根据你的真实感受，选择最贴近的分数（0分代表"完全不是"，10分代表"完全是这样"）。</p>
      </div>
    </div>

    <div v-for="(question, index) in questions" :key="index" class="question-card">
      <div class="question-number">问题 {{ index + 1 }} / {{ questions.length }}</div>
      <div class="question-text">{{ question.zh }}</div>
      <div class="question-text-en">{{ question.en }}</div>
      <div v-if="question.note" class="question-note">{{ question.note }}</div>
      <div class="score-options">
        <button
          v-for="score in 11"
          :key="score - 1"
          class="score-btn"
          :class="{ selected: answers[index] === score - 1 }"
          @click="selectScore(index, score - 1)"
        >
          {{ score - 1 }}
        </button>
      </div>
    </div>

    <div class="submit-section">
      <button
        class="submit-btn"
        :disabled="!allAnswered"
        @click="submitQuiz"
      >
        <template v-if="allAnswered">查看结果 🎯</template>
        <template v-else>请完成所有问题 ({{ answers.filter(a => a !== null).length }}/{{ questions.length }})</template>
      </button>
    </div>

    <div v-if="submitted" id="result-section" class="result-section">
      <div class="score-display">
        <div class="score-label">你的幸福指数</div>
        <div class="score-number" :style="{ color: feedback.color }">
          {{ totalScore }} / {{ maxScore }}
        </div>
        <div class="score-label">{{ scorePercentage }}%</div>
      </div>

      <div class="feedback-card" :style="{ borderLeftColor: feedback.color }">
        <h2 class="feedback-title" :style="{ color: feedback.color }">
          {{ feedback.title }}
        </h2>
        <p class="feedback-message">
          {{ feedback.message }}
        </p>
        <div class="feedback-tips">
          <strong>💡 {{ feedback.tipsTitle }}：</strong>
          {{ feedback.tipsContent }}
        </div>
      </div>

      <button class="reset-btn" @click="resetQuiz">
        重新测试
      </button>
    </div>

    <div class="disclaimer">
      <p>💝 温馨提示：本测验仅供参考，不能替代专业的心理评估。如果你正在经历严重的情绪困扰，请寻求专业心理咨询师的帮助。</p>
      <p>数据说明：所有答案仅保存在你的浏览器本地，我们不会收集或存储任何个人信息。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showInstructions = ref(true)
const answers = ref(Array(14).fill(null))
const submitted = ref(false)

const questions = [
  {
    zh: '我保持着规律运动的习惯',
    en: 'Physical activity and movement are a part of my daily routine.'
  },
  {
    zh: '我的日常饮食均衡、健康',
    en: 'I generally eat healthy, nutritious, and natural food.'
  },
  {
    zh: '我能保证充足且高质量的睡眠或恢复时间',
    en: 'I get a healthy amount of sleep and recovery breaks.'
  },
  {
    zh: '我对未知和新体验充满好奇，保持开放',
    en: 'I am curious and open to new experiences.'
  },
  {
    zh: '我能定期、专注地进行深度学习',
    en: 'I regularly engage in deep, focused learning.'
  },
  {
    zh: '我会优先安排时间与生命中重要的人相处',
    en: 'I make it a priority to spend time with people I care about and who care about me.'
  },
  {
    zh: '我能感受到来自他人的欣赏与认可',
    en: 'I feel appreciated by my coworkers.'
  },
  {
    zh: '我能专注于当下',
    en: 'I am a mindful person.',
    note: '注：专注当下指不过度忧虑过去或未来，并接纳事物本然状态。Note: a mindful person pays attention to the present, less concerned about the past or future, and accepts things as they are.'
  },
  {
    zh: '我能像对待挚友一样，友善地对待自己',
    en: 'I treat myself as kindly as I would treat my best friend.'
  },
  {
    zh: '我能全然地接纳和体验自己的各种情绪 (无论好坏)',
    en: 'I allow myself to experience the full range of emotions, both pleasurable and painful.'
  },
  {
    zh: '我能主动调节自己的想法和行为，来改善情绪状态',
    en: 'I positively influence my emotional wellbeing by changing and adjusting my thoughts and actions.'
  },
  {
    zh: '我的人生有清晰明确的意义和方向',
    en: 'I have a strong sense of meaning and purpose in my life.'
  },
  {
    zh: '我觉得自己的目标正在一步步实现',
    en: 'I feel I am making progress towards accomplishing my goals.'
  },
  {
    zh: '总体而言，我感到自己是幸福的',
    en: 'In general, I consider myself a happy person.'
  }
]

const totalScore = computed(() => {
  return answers.value.reduce((sum, score) => sum + (score || 0), 0)
})

const maxScore = 140

const scorePercentage = computed(() => {
  return Math.round((totalScore.value / maxScore) * 100)
})

const allAnswered = computed(() => {
  return answers.value.every(score => score !== null)
})

const feedback = computed(() => {
  const percentage = scorePercentage.value
  
  if (percentage >= 85) {
    return {
      title: '✨ 太棒了！你正处于很棒的状态！',
      message: '你的幸福指数非常高！看得出来，你对生活有着积极的态度，在身心健康、人际关系、个人成长等方面都保持着很好的平衡。继续保持这份美好的状态，你就是身边人的正能量源泉！💖',
      tipsTitle: '建议',
      tipsContent: '不妨将你的幸福感受分享给身边的人，你的积极态度会感染更多人。同时，也要记得适时休息，让这份美好可持续。',
      color: '#10b981'
    }
  } else if (percentage >= 70) {
    return {
      title: '😊 很不错！你在朝着幸福前进',
      message: '你的幸福指数处于良好水平！你已经在很多方面做得很好了，生活整体是积极向上的。或许还有一些小地方可以优化，但不必焦虑，每个人都在自己的节奏里成长。',
      tipsTitle: '建议',
      tipsContent: '回顾一下打分较低的维度，想想有什么小改变可以让你感觉更好？比如增加一点运动、改善睡眠，或者多花时间和重要的人在一起。',
      color: '#3b82f6'
    }
  } else if (percentage >= 50) {
    return {
      title: '🌱 不错哦，还有成长空间',
      message: '你的状态处于中等水平，这很正常！生活总有起伏，重要的是你愿意停下来审视自己的状态。每个人都会经历这样的阶段，这不代表你做得不好，只是说明还有提升的空间。',
      tipsTitle: '建议',
      tipsContent: '试着从最容易改变的地方开始。比如今天开始保证8小时睡眠？本周安排一次和朋友的聚会？给自己设定一个小目标，慢慢来，你会看到改变的。',
      color: '#f59e0b'
    }
  } else {
    return {
      title: '🤗 给你一个温暖的拥抱',
      message: '看起来你最近可能面临一些挑战，感觉有些累了。首先，要为你的诚实点赞——能够真实面对自己的状态，这本身就很了不起。每个人都会有低谷期，这不是你的错，也不代表你不够好。',
      tipsTitle: '建议',
      tipsContent: '不要给自己太大压力。从最基础的开始：规律作息、适当运动、和信任的人聊聊天。如果感觉压力很大，也可以考虑寻求专业帮助。记住，寻求帮助是勇敢的表现，不是软弱。你值得被善待，包括善待你自己。💝',
      color: '#ec4899'
    }
  }
})

const selectScore = (questionIndex, score) => {
  answers.value[questionIndex] = score
}

const submitQuiz = () => {
  if (allAnswered.value) {
    submitted.value = true
    setTimeout(() => {
      const resultEl = document.getElementById('result-section')
      if (resultEl) {
        resultEl.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
}

const resetQuiz = () => {
  answers.value = Array(14).fill(null)
  submitted.value = false
  showInstructions.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.wellbeing-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  width: 100%;
}

.quiz-header {
  text-align: center;
  margin-bottom: 3rem;
}

.quiz-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 1rem;
}

.quiz-subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.instructions {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--vp-c-brand-1);
}

.instructions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.instructions h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
}

.toggle-btn {
  background: none;
  border: none;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
}

.toggle-btn:hover {
  opacity: 0.8;
}

.instructions-content {
  color: var(--vp-c-text-2);
  line-height: 1.8;
  font-size: 0.95rem;
}

.instructions-content p {
  margin: 0.5rem 0;
}

.question-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.question-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.question-number {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
  line-height: 1.6;
}

.question-text-en {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
  font-style: italic;
  line-height: 1.5;
}

.question-note {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: var(--vp-c-bg);
  border-radius: 6px;
  line-height: 1.5;
}

.score-options {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.score-btn {
  min-width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.score-btn:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.score-btn.selected {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: white;
}

.submit-section {
  text-align: center;
  margin: 3rem 0;
}

.submit-btn {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.result-section {
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.score-display {
  text-align: center;
  margin-bottom: 2rem;
}

.score-number {
  font-size: 4rem;
  font-weight: 700;
  margin: 1rem 0;
}

.score-label {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

.feedback-card {
  background: var(--vp-c-bg);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 6px solid;
}

.feedback-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feedback-message {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.feedback-tips {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.feedback-tips strong {
  color: var(--vp-c-text-1);
}

.reset-btn {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
}

.reset-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.disclaimer {
  margin-top: 3rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  line-height: 1.6;
  text-align: center;
}

.disclaimer p {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .quiz-title {
    font-size: 2rem;
  }
  
  .score-btn {
    min-width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .score-number {
    font-size: 3rem;
  }
}
</style>

