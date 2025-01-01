import{_ as i,c as a,b as n,o as l}from"./app-Bz06rx9a.js";const h={};function e(k,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h3 id="创建excel文件" tabindex="-1"><a class="header-anchor" href="#创建excel文件"><span>创建excel文件</span></a></h3><p>建议使用wps创建excel直接创建excel.xlsx会有问题</p><h3 id="安装-exceljs插件" tabindex="-1"><a class="header-anchor" href="#安装-exceljs插件"><span>安装 exceljs插件</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exceljs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="编写任务代码" tabindex="-1"><a class="header-anchor" href="#编写任务代码"><span>编写任务代码</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">gulp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">task</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">exceljs</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> async</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 读取Excel文件</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> workbook</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ExcelJS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Workbook</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 从文件读取</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> workbook</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">xlsx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">readFile</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./excel.xlsx</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        .</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">then</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            // 处理Excel文件中的数据</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">            const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> worksheet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> workbook</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getWorksheet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 获取第一个工作表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">            worksheet</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">eachRow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> includeEmpty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> rowNumber</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                // 处理每一行的数据</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Row </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rowNumber</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">: </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">values</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">                let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> spliceElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">values</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">splice</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">                console</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">spliceElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">filter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> el</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!==undefined</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                }));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            });</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        });</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>excel官网 https://github.com/exceljs/exceljs/blob/master/README_zh.md</p></blockquote>`,7)]))}const p=i(h,[["render",e],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/z3tbxqd0/","title":"gulp读取execl","lang":"zh-CN","frontmatter":{"title":"gulp读取execl","createTime":"2024/01/13 20:15:06","tags":["gulp"],"permalink":"/article/z3tbxqd0/"},"headers":[],"readingTime":{"minutes":0.44,"words":132},"git":{"updatedTime":1735723707000,"contributors":[{"name":"netjic","username":"netjic","email":"netjic@163.com","commits":1,"avatar":"https://gravatar.com/avatar/374578fe375437866193fe849b770e3f9c74eacc1a7125303870c05b7a97309d?d=retro"}]},"filePathRelative":"gulp/gulp读取excel.md","categoryList":[{"id":"3dedcc","sort":10003,"name":"gulp"}],"bulletin":false}');export{p as comp,d as data};
