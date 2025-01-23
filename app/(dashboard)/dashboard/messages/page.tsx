// types/messages.ts
interface User {
  id: string;
  name: string;
  avatar?: string;
  lastSeen?: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

interface Conversation {
  id: string;
  user: User;
  lastMessage: Message;
  unreadCount: number;
}

// app/(dashboard)/messages/page.tsx
import React from 'react';
import { 
  Send, 
  MoreVertical, 
  Phone,
  Image as ImageIcon,
  Paperclip,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function MessagesPage() {
  // Sample data
  const conversations: Conversation[] = [
    {
      id: '1',
      user: {
        id: '1',
        name: 'أحمد محمد',
        lastSeen: 'متصل الآن'
      },
      lastMessage: {
        id: '1',
        senderId: '1',
        content: 'هل الكتاب ما زال متوفر؟',
        timestamp: 'قبل 5 دقائق',
        isRead: false
      },
      unreadCount: 2
    },
    {
      id: '2',
      user: {
        id: '2',
        name: 'سارة أحمد',
        lastSeen: 'قبل ساعة'
      },
      lastMessage: {
        id: '2',
        senderId: '2',
        content: 'شكراً لك، سأقوم بتحويل المبلغ',
        timestamp: 'قبل ساعتين',
        isRead: true
      },
      unreadCount: 0
    },
    // Add more conversations...
  ];

  const currentChat: Message[] = [
    {
      id: '1',
      senderId: '1',
      content: 'مرحباً، هل الكتاب ما زال متوفر؟',
      timestamp: '10:30 AM',
      isRead: true
    },
    {
      id: '2',
      senderId: 'me',
      content: 'نعم، الكتاب متوفر. هل تريد شراءه؟',
      timestamp: '10:32 AM',
      isRead: true
    },
    {
      id: '3',
      senderId: '1',
      content: 'نعم، ما هي حالة الكتاب؟',
      timestamp: '10:33 AM',
      isRead: true
    },
    {
      id: '4',
      senderId: 'me',
      content: 'الكتاب بحالة ممتازة، تم استخدامه مرة واحدة فقط',
      timestamp: '10:35 AM',
      isRead: true
    }
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white rounded-lg overflow-hidden">
      {/* Conversations List */}
      <div className="w-full md:w-80 border-l bg-gray-50">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="بحث في المحادثات..." 
              className="pr-10"
            />
          </div>
        </div>
        
        <div className="overflow-y-auto h-full">
          {conversations.map((conversation) => (
            <div 
              key={conversation.id}
              className={`flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer ${
                conversation.id === '1' ? 'bg-gray-100' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {conversation.user.name.charAt(0)}
                  </span>
                </div>
                {conversation.unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium truncate">
                    {conversation.user.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {conversation.lastMessage.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-500 truncate">
                  {conversation.lastMessage.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold">أ</span>
            </div>
            <div>
              <h3 className="font-medium">أحمد محمد</h3>
              <p className="text-sm text-gray-500">متصل الآن</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>حظر المستخدم</DropdownMenuItem>
                <DropdownMenuItem>مسح المحادثة</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  إبلاغ عن مشكلة
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentChat.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.senderId === 'me' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.senderId === 'me'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <p>{message.content}</p>
                <span className={`text-xs ${
                  message.senderId === 'me'
                    ? 'text-blue-100'
                    : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input 
              placeholder="اكتب رسالتك هنا..."
              className="flex-1"
            />
            <Button>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Empty State for Mobile */}
      <div className="flex-1 items-center justify-center md:hidden">
        <div className="text-center p-4">
          <h3 className="font-medium">اختر محادثة</h3>
          <p className="text-sm text-gray-500">
            اختر محادثة من القائمة لعرض الرسائل
          </p>
        </div>
      </div>
    </div>
  );
}