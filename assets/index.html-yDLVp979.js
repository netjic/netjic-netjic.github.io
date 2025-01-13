import{_ as i,c as a,a as n,o as t}from"./app-D8ixr-2J.js";const e={};function l(h,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="date命令" tabindex="-1"><a class="header-anchor" href="#date命令"><span>date命令</span></a></h2><p>用来显示或设定系统的日期与时间</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-d</td><td>通过字符串显示时间格式，字符串不能是“now”</td></tr><tr><td>-s</td><td>根据字符串设置系统时间</td></tr><tr><td>-u</td><td>显示目前的格林威治时间</td></tr><tr><td>-r</td><td>显示文件的上此修改时间</td></tr></tbody></table><p>若不是以加号作为开头，则表示设定时间，而时间格式为<code>MMDDhhmm[[CC]YY[.ss]]</code>，其中<code>MM</code>为月份，<code>DD</code>为日，<code>hh</code>为小时，<code>mm</code>为分钟，<code>CC</code>为年份前两位数字，<code>YY</code>为年份后两位数字，<code>ss</code>为秒数。</p><p>当你不希望出现无意义的0时（比如说1999/03/07），则可以在标记中插入<code>-</code>符号，比如说<code>data &#39;+%-H:%-M:%-S&#39;</code>会把时分秒中无意义的0给去掉，像原本的08:09:04会变成8:9:4。另外，只有取得权限者（比如说root）才能设定系统时间。</p><p>当你以root身份更改了系统时间之后，请记得以<code>clock -w</code>来将系统时间写入CMOS中，这样下次重新开机时系统时间才会持续保持最新的正确值。</p><p>参考示例：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 以默认的格式输出系统当前的日期与时间信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 按照“年-月-日”的指定格式输出系统当前的日期信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">+%Y-%m-%d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 按照“小时:分钟:秒”的指定格式输出系统当前的时间信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">+%H:%M:%S</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 时间格式转换</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2009-12-12</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">%Y/%m/%d %H:%M.%S</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间加减操作" tabindex="-1"><a class="header-anchor" href="#时间加减操作"><span>时间加减操作</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                   # 显示年月日</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">+1 day</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       # 显示后一天的日期</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-1 day</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       # 显示前一天的日期</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-1 month</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # 显示上一月的日期</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">+1 month</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # 显示下一月的日期</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-1 year</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 显示前一年的日期</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">date</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">+1 year</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +%Y%m%d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 显示下一年的日期</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const k=i(e,[["render",l],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/linux/%E6%97%B6%E9%97%B4%E6%97%A5%E6%9C%9F/1wqb8e6m/","title":"时间日期","lang":"zh-CN","frontmatter":{"title":"时间日期","createTime":"2025/01/08 11:57:02","permalink":"/linux/时间日期/1wqb8e6m/"},"headers":[],"readingTime":{"minutes":1.68,"words":504},"git":{"updatedTime":1736323201000,"contributors":[{"name":"netjic","username":"netjic","email":"netjic@163.com","commits":1,"avatar":"https://gravatar.com/avatar/374578fe375437866193fe849b770e3f9c74eacc1a7125303870c05b7a97309d?d=retro"}]},"filePathRelative":"notes/linux/时间日期.md","bulletin":false}');export{k as comp,p as data};
