package andy.web.ngbootapp;

import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import andy.web.ngbootapp.domain.Stock;
import andy.web.ngbootapp.service.StockService;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class NgbootServiceTest {

	@Autowired
	private StockService stockSrvc;
	
	@Before
	public void setUp() {
	}
	
	@After
	public void tearDown() {
	}
	
	@Test
	public void testGetAllStocks() {
		List<Stock> result=stockSrvc.getAllStocks();
		Assert.assertNotNull("failure - expected not null", result);
		Assert.assertEquals("failure - expected 4", 4, result.size());
	}
}
