<!--
 * @Author: JerryLiu3502 jerryliu.info@gmail.com
 * @Date: 2026-04-10 11:02:39
 * @LastEditors: JerryLiu3502 jerryliu.info@gmail.com
 * @LastEditTime: 2026-04-10 11:03:51
 * @FilePath: /complaint_service/Users/jerry/Documents/work/code/claude/Chiname/docs/api实现.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
fetch('https://api.siliconflow.cn/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'Pro/zai-org/GLM-4.7',
    messages: [
      {role: 'system', content: '你是一个有用的助手'},
      {role: 'user', content: '你好，请介绍一下你自己'}
    ]
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));