import{_ as i,c as a,a as n,o as l}from"./app-D8ixr-2J.js";const e={};function h(t,s){return l(),a("div",null,s[0]||(s[0]=[n(`<p>编辑配置文件 vim /etc/profile</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 环境变量设置</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> JAVA_HOME</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">usr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">local</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">jdk</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>基本概念：</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        # 系统查找可执行文件的路径列表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # JDK安装目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/bin</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         # 具体的目录路径</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            # 路径分隔符（Linux用:，Windows用;,多路径使用:分割）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 使用冒号(:)分隔多个路径</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">usr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">local</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">usr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">usr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">local</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">java</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 添加多个新路径</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MAVEN_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$GRADLE_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>PATH的工作原理：</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 原始的 PATH 可能是：</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $PATH</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/usr/local/bin:/usr/bin:/bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 添加新路径后：</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/bin</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/usr/local/bin:/usr/bin:/bin:/usr/local/jdk1.8.0_291/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>命令查找顺序：</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 当你输入 java 命令时，系统会按顺序在这些目录中查找：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">1.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/bin/java</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">2.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/bin/java</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">3.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /bin/java</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">4.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/jdk1.8.0_291/bin/java</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 找到并执行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.不同的添加方式：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 添加到末尾（最后搜索）</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 添加到开头（最先搜索）</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 添加多个路径</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> PATH</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$PATH</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$JAVA_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$MAVEN_HOME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const p=i(e,[["render",h],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/fzxyhvgo/","title":"环境变量配置原理","lang":"zh-CN","frontmatter":{"title":"环境变量配置原理","createTime":"2025/01/04 15:44:40","tags":["linux","shell"],"permalink":"/article/fzxyhvgo/"},"headers":[],"readingTime":{"minutes":0.81,"words":243},"git":{"updatedTime":1735977554000,"contributors":[{"name":"netjic","username":"netjic","email":"netjic@163.com","commits":1,"avatar":"https://gravatar.com/avatar/374578fe375437866193fe849b770e3f9c74eacc1a7125303870c05b7a97309d?d=retro"}]},"filePathRelative":"linux/环境变量配置原理.md","categoryList":[{"id":"e206a5","sort":10005,"name":"linux"}],"bulletin":false}');export{p as comp,d as data};
