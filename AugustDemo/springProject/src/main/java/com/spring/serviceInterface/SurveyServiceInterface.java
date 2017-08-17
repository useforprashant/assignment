package com.spring.serviceInterface;

import java.util.ArrayList;

import com.spring.model.SurveyModel;

public interface SurveyServiceInterface {

	public void save(SurveyModel model);
	public void deleteAll();
	public ArrayList<SurveyModel> selectAll();
}
