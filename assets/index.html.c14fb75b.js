const e=JSON.parse(`{"key":"v-af4d51b6","path":"/mt/mrasp/","title":"Multilingual MT Pre-training --- mRASP","lang":"en-US","frontmatter":{"title":"Multilingual MT Pre-training --- mRASP","author":"Xiao Pan","date":"2020-12-31T00:00:00.000Z","tag":["Multilingual MT","Pre-training","Random Aligned Substitution","Zero-shot Translation","mRASP"],"category":["MT"],"summary":"\u200B\\tIn 1920, the great philosopher Bertrand Russell visited China, accompanied by Yuen Ren Chao, a Chinese-American linguist. Mr. Chao was a naturally gifted polyglot. At that time, he could already speak Baoding dialect, Wu dialect, Fuzhou dialect, Nanjing dialect, and English. He accompanied Russell from Shanghai to Changsha by ship. During the trip, he was learning Changsha dialect from Yang Ruiliu, an economist on the same ship. When the ship docked in Changsha, Yuen Ren Chao was already able to translate Russell's speeches and slang into Changsha dialect. Can our neural network  become a model like &quot;Yuen Ren Chao&quot; on machine translation? That is, to create a unified model with multilingual abilities, and when encountering new languages, the model could quickly adapt to translating new ones after training with a small amount of data.\\n","head":[["meta",{"property":"og:url","content":"https://lileicc.github.io/blog/mt/mrasp/"}],["meta",{"property":"og:site_name","content":"MLNLP Blog"}],["meta",{"property":"og:title","content":"Multilingual MT Pre-training --- mRASP"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lileicc.github.io/blog/"}],["meta",{"property":"og:updated_time","content":"2022-10-01T23:54:56.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Multilingual MT Pre-training --- mRASP"}],["meta",{"property":"article:author","content":"Xiao Pan"}],["meta",{"property":"article:tag","content":"Multilingual MT"}],["meta",{"property":"article:tag","content":"Pre-training"}],["meta",{"property":"article:tag","content":"Random Aligned Substitution"}],["meta",{"property":"article:tag","content":"Zero-shot Translation"}],["meta",{"property":"article:tag","content":"mRASP"}],["meta",{"property":"article:published_time","content":"2020-12-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-01T23:54:56.000Z"}]]},"excerpt":"<p>\u200B\\tIn 1920, the great philosopher Bertrand Russell visited China, accompanied by Yuen Ren Chao, a Chinese-American linguist. Mr. Chao was a naturally gifted polyglot. At that time, he could already speak Baoding dialect, Wu dialect, Fuzhou dialect, Nanjing dialect, and English. He accompanied Russell from Shanghai to Changsha by ship. During the trip, he was learning Changsha dialect from Yang Ruiliu, an economist on the same ship. When the ship docked in Changsha, Yuen Ren Chao was already able to translate Russell's speeches and slang into Changsha dialect. Can our neural network  become a model like &quot;Yuen Ren Chao&quot; on machine translation? That is, to create a unified model with multilingual abilities, and when encountering new languages, the model could quickly adapt to translating new ones after training with a small amount of data.</p>\\n","headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Challenges in machine translation pre-training","slug":"challenges-in-machine-translation-pre-training","link":"#challenges-in-machine-translation-pre-training","children":[]},{"level":2,"title":"Motivation and Techniques of mRASP","slug":"motivation-and-techniques-of-mrasp","link":"#motivation-and-techniques-of-mrasp","children":[]},{"level":2,"title":"Effectiveness of mRASP","slug":"effectiveness-of-mrasp","link":"#effectiveness-of-mrasp","children":[{"level":3,"title":"1. En-De and En-Fr Benchmarks","slug":"_1-en-de-and-en-fr-benchmarks","link":"#_1-en-de-and-en-fr-benchmarks","children":[]},{"level":3,"title":"2. Extend to language not seen during the pre-training phase","slug":"_2-extend-to-language-not-seen-during-the-pre-training-phase","link":"#_2-extend-to-language-not-seen-during-the-pre-training-phase","children":[]},{"level":3,"title":"3. Case study","slug":"_3-case-study","link":"#_3-case-study","children":[]},{"level":3,"title":"Findings from mRASP trained model","slug":"findings-from-mrasp-trained-model","link":"#findings-from-mrasp-trained-model","children":[]}]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"createdTime":1663040715000,"updatedTime":1664668496000,"contributors":[{"name":"Lei Li","email":"lileicc@gmail.com","commits":3}]},"readingTime":{"minutes":12.63,"words":3788},"filePathRelative":"mt/mrasp/README.md","localizedDate":"December 31, 2020"}`);export{e as data};
