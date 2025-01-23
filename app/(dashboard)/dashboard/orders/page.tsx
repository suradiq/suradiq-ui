"use client"
import React from 'react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  customerAr: string;
  date: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  items: number;
}

const OrdersPage = () => {
  const translations = {
    orders: "الطلبات",
    searchPlaceholder: "البحث عن الطلبات...",
    filterByStatus: "تصفية حسب الحالة",
    allStatus: "جميع الحالات",
    pending: "قيد الانتظار",
    processing: "قيد المعالجة",
    completed: "مكتمل",
    cancelled: "ملغي",
    orderId: "رقم الطلب",
    customer: "العميل",
    date: "التاريخ",
    status: "الحالة",
    total: "المجموع",
    actions: "الإجراءات",
    viewDetails: "عرض التفاصيل",
    items: "العناصر",
    currency: "ر.س"
  };

  const sampleOrders: Order[] = [
    {
      id: "ORD-001",
      customer: "John Doe",
      customerAr: "جون دو",
      date: "2025-01-15",
      status: "completed",
      total: 299.99,
      items: 3
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      customerAr: "جين سميث",
      date: "2025-01-14",
      status: "pending",
      total: 149.99,
      items: 2
    },
    {
      id: "ORD-003",
      customer: "Ahmed Hassan",
      customerAr: "أحمد حسن",
      date: "2025-01-13",
      status: "processing",
      total: 199.99,
      items: 4
    }
  ];

  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<keyof Order>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-200 text-yellow-800';
      case 'processing':
        return 'bg-blue-200 text-blue-800';
      case 'completed':
        return 'bg-green-200 text-green-800';
      case 'cancelled':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return translations.pending;
      case 'processing':
        return translations.processing;
      case 'completed':
        return translations.completed;
      case 'cancelled':
        return translations.cancelled;
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ar-SA', options);
  };

  const handleSort = (field: keyof Order) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerAr.includes(searchTerm) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  return (
    <div className="p-6 space-y-6 text-right" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle>{translations.orders}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={translations.searchPlaceholder}
                className="pr-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder={translations.filterByStatus} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{translations.allStatus}</SelectItem>
                <SelectItem value="pending">{translations.pending}</SelectItem>
                <SelectItem value="processing">{translations.processing}</SelectItem>
                <SelectItem value="completed">{translations.completed}</SelectItem>
                <SelectItem value="cancelled">{translations.cancelled}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right w-[100px] cursor-pointer" onClick={() => handleSort('id')}>
                    {translations.orderId}
                    {sortField === 'id' && (
                      sortDirection === 'asc' ? <ChevronUp className="inline mr-1 h-4 w-4" /> : 
                      <ChevronDown className="inline mr-1 h-4 w-4" />
                    )}
                  </TableHead>
                  <TableHead className="text-right cursor-pointer" onClick={() => handleSort('customer')}>
                    {translations.customer}
                    {sortField === 'customer' && (
                      sortDirection === 'asc' ? <ChevronUp className="inline mr-1 h-4 w-4" /> : 
                      <ChevronDown className="inline mr-1 h-4 w-4" />
                    )}
                  </TableHead>
                  <TableHead className="text-right cursor-pointer" onClick={() => handleSort('date')}>
                    {translations.date}
                    {sortField === 'date' && (
                      sortDirection === 'asc' ? <ChevronUp className="inline mr-1 h-4 w-4" /> : 
                      <ChevronDown className="inline mr-1 h-4 w-4" />
                    )}
                  </TableHead>
                  <TableHead className="text-right">{translations.status}</TableHead>
                  <TableHead className="text-right cursor-pointer" onClick={() => handleSort('items')}>
                    {translations.items}
                    {sortField === 'items' && (
                      sortDirection === 'asc' ? <ChevronUp className="inline mr-1 h-4 w-4" /> : 
                      <ChevronDown className="inline mr-1 h-4 w-4" />
                    )}
                  </TableHead>
                  <TableHead className="text-right cursor-pointer" onClick={() => handleSort('total')}>
                    {translations.total}
                    {sortField === 'total' && (
                      sortDirection === 'asc' ? <ChevronUp className="inline mr-1 h-4 w-4" /> : 
                      <ChevronDown className="inline mr-1 h-4 w-4" />
                    )}
                  </TableHead>
                  <TableHead className="text-right">{translations.actions}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customerAr}</TableCell>
                    <TableCell>{formatDate(order.date)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusText(order.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.total} {translations.currency}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        {translations.viewDetails}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersPage;