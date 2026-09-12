package com.daksharora.removebg.service;

import com.razorpay.Order;
import com.razorpay.RazorpayException;

public interface OrderService {

    Order createOder(String planId, String clerkId) throws RazorpayException;
}
