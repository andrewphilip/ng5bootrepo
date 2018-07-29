package andy.web;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StockRepoInMongo extends MongoRepository<Stock, String> {

	public List<Stock> findBySymbol(String sym);
	
}
