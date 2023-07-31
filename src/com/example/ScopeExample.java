package com.example;

public class ScopeExample {

	public static void main(String[] args) {
		int a=1;
		{
			int b=2;
			{
//				int a=3;
//				int b=3;
			}
		}
	}

}
