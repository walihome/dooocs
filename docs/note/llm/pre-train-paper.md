---
title: 预训练阶段论文
order: 3
---
# 预训练阶段论文

## Masked Language Modeling, MLM, 完形填空
这种方法的核心思想是“双向理解”，其代表作是 BERT。

### BERT （2018）
`BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2018)` 
作者/机构： `Jacob Devlin et al. (Google AI)`
链接： https://arxiv.org/abs/1810.04805

核心贡献（必读经典）：
开创性地提出了 Masked Language Model (MLM)，即“完形填空”任务，让模型能够同时利用一个词左右两边的上下文信息进行预测，实现了真正的“双向”理解。
使用了 Transformer 的 Encoder 部分 作为模型骨架，证明了其在理解任务上的强大能力。
提出了“预训练-微调” (Pre-training and Fine-tuning) 的范式，通过在海量数据上预训练一个通用模型，然后在各种下游任务（如文本分类、问答）上进行简单微调，即可取得当时最优（SOTA）的效果，极大地推动了NLP领域的发展。

### RoBERTa （2019）
`RoBERTa: A Robustly Optimized BERT Pretraining Approach (2019) `
作者/机构： `Yinhan Liu et al. (Facebook AI)`
链接： https://arxiv.org/abs/1907.11692

核心贡献：
这篇论文可以看作是 “如何更好地训练BERT” 的一份官方指南。
它发现BERT本身的设计很强大，但初版的训练策略并非最优。通过使用更多的数据、更长的训练时间、更大的批次、并取消Next Sentence Prediction (NSP)任务等一系列优化，RoBERTa在没有改变模型结构的情况下，性能大幅超越了原版BERT。

## Causal Language Modeling, CLM, 文字接龙
这种方法的核心思想是“从左到右生成”，其代表作是 GPT 系列。
### GPT-1 (2018)
`Improving Language Understanding by Generative Pre-Trainin`
作者/机构： `Alec Radford et al. (OpenAI)`
链接： OpenAI 官方博客/论文链接

核心贡献：
确立了生成式预训练（Generative Pre-training）的有效性，即通过预测下一个词（CLM任务）来训练一个大型语言模型。
使用了 Transformer 的 Decoder 部分 作为模型骨架，天然适合从左到右的生成任务。
和BERT几乎同时期提出，共同开启了大规模预训练模型的时代，但它奠定了GPT系列后续发展的基础。

### GPT-2 (2019)
`Language Models are Unsupervised Multitask Learners `
作者/机构： `Alec Radford et al. (OpenAI)`
链接： OpenAI 官方博客/论文链接

核心贡献：
展示了“大力出奇迹” (Scaling Law) 的巨大潜力。通过将模型参数从GPT-1的1.17亿扩大到15亿，并使用更大规模、更高质量的数据集（WebText），GPT-2展现了惊人的生成能力。
提出了“零样本” (Zero-shot) 的概念。模型在没有经过任何微调的情况下，仅通过给出合适的“提示”(Prompt)，就能完成多种任务（如阅读理解、翻译、摘要），证明了CLM模型内在的通用能力。
### GPT-3 (2020)
`Language Models are Few-Shot Learners `
作者/机构： `Tom Brown et al. (OpenAI)`
链接： https://arxiv.org/abs/2005.14165

核心贡献：
将模型规模推向了新的高度（1750亿参数），其生成文本的质量和连贯性达到了前所未有的水平，引爆了整个AI领域。
系统性地验证了“上下文学习” (In-context Learning) 的能力，包括零样本(Zero-shot)、一样本(One-shot)和少样本(Few-shot)。即不需要更新模型权重，只要在提示中给模型几个例子，它就能模仿例子来完成任务，这极大地改变了人们与模型交互的方式。

### LLaMA (2023)
`Open and Efficient Foundation Language Models`
作者/机构： `Hugo Touvron et al. (Meta AI)`
链接： https://arxiv.org/abs/2302.13971

核心贡献：
证明了在给定计算预算下，用更多的数据训练一个更小的模型，可能比用更少的数据训练一个更大的模型效果更好。
其开源版本（虽然最初是权重泄露）极大地促进了开源社区的发展，催生了后续无数基于LLaMA的优秀模型，开启了开源大模型的新纪元。
总结与发展趋势

早期（2018-2020）： MLM (BERT) 在理解类任务上占优，而 CLM (GPT) 在生成类任务上占优。
现在（2020至今）： 随着模型规模的急剧增大，CLM（文字接龙）范式已经成为绝对的主流。因为人们发现，当一个模型把“接龙”做到极致时，它自然而然地就学会了“理解”。生成成了一个更通用的能力，可以解决包括理解在内的几乎所有NLP任务。我们今天看到的ChatGPT、Claude、LLaMA等，其基座模型都是采用CLM方式进行预训练的。
希望这份论文清单能帮助您更深入地理解大模型训练的底层原理！
