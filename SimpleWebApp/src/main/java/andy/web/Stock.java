package andy.web;

import org.springframework.data.annotation.Id;

//import javax.persistence.Entity;
//import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="stock")
public class Stock {
	@Id
	private String symbol;
	private  String company;
	private  double price;
	private  double changeinval;
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getChangeinval() {
		return changeinval;
	}
	public void setChangeinval(double changeinval) {
		this.changeinval = changeinval;
	}
	@Override
	public String toString() {
		return "Stock [symbol=" + symbol + ", company=" + company + ", price=" + price + ", changeinval=" + changeinval
				+ "]";
	}
	
	
	
	
}
