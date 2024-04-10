import React from 'react';
import Chat, { Bubble, MessageProps, useMessages } from '@/UIsrc';

let botUserInfo = {
    avatar: 'https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png',
    name: '云小蜜',
}

type MessageWithoutId = Omit<MessageProps, '_id'>;
const initialMessages: MessageWithoutId[] = [
    {
        type: 'text',
        content: { text: '主人好，我是智能助理，你的贴心小助手~' },
        user: botUserInfo,
    }
];



export default () => {

    const { messages, appendMsg, setTyping } = useMessages(initialMessages);
    const handleSend = (type: string, msg: string) => {
        console.log("====发送消息====", msg)
        appendMsg({
            type: 'text',
            content: { text: msg },
            position: 'right',
            user: {
                avatar: '//gw.alicdn.com/tfs/TB1g6n4xQP2gK0jSZPxXXacQpXa-234-216.png',
                name: '用户大哥',
            },
        });
        setTyping(true);
        // 模拟回复消息
        setTimeout(() => {
            appendMsg({
                type: 'text',
                content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
                user: botUserInfo,
            });
        }, 900);
    }

    const handleRenderMessageContent = (msg: MessageProps) => {
        console.log("====渲染消息====", msg)
        switch (msg.type) {
            case "text":
                return <Bubble content={msg?.content?.text} />;
            default:
                return null
        }
    }


    // 配置chat组件属性
    let chatConfig = {
        messages: messages,
        onSend: handleSend,
        renderMessageContent: handleRenderMessageContent,
        navbar: { title: '云小蜜' }
    }

    return (
        <Chat {...chatConfig} ></Chat>
    )
}

