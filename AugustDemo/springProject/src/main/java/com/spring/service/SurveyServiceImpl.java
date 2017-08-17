package com.spring.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.daoInterface.SurveyDaoInterface;
import com.spring.model.SurveyModel;
import com.spring.serviceInterface.SurveyServiceInterface;

public class SurveyServiceImpl  implements SurveyServiceInterface{
	
	@Autowired
	SurveyDaoInterface daoInterface;
	
	public void save(SurveyModel model){
		daoInterface.save(model);
	}

	public void deleteAll() {
		
		daoInterface.deleteAll();
	}

	public ArrayList<SurveyModel> selectAll() {
		return daoInterface.selectAll();
	}

}
