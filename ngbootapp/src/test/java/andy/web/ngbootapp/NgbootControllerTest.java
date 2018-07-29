package andy.web.ngbootapp;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import andy.web.ngbootapp.controller.StockController;
import andy.web.ngbootapp.domain.Stock;
import andy.web.ngbootapp.service.StockService;

@RunWith(SpringRunner.class)
@WebMvcTest(value=StockController.class,secure=false)
public class NgbootControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private StockService srvc;
	
	List<Stock> stocks=new ArrayList<Stock>();
	
	@Before
	public void setUp() {
		stocks.add(new Stock("FB","Facebook",210.15,+2.54));
	}
	
	@After
	public void tearDown() {
		stocks.clear();
	}
	
	@Test
	public void getAllStocks() throws Exception {
		Mockito.when(srvc.getAllStocks()).thenReturn(stocks);
		
		RequestBuilder builder= MockMvcRequestBuilders.get("/stocklist")
		.accept(MediaType.APPLICATION_JSON);
		
		MvcResult result= mockMvc.perform(builder).andReturn();
		
		System.out.println(result.getResponse().getContentAsString());
		String expected="[{symbol:FB,company:Facebook,price:210.15,changeinval:2.54}]";
		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
	}
}
