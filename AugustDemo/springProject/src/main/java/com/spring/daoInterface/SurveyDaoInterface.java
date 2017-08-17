package com.spring.daoInterface;

import java.awt.List;
import java.util.ArrayList;

import com.spring.model.SurveyModel;

public interface SurveyDaoInterface {

	public void save(SurveyModel model);
	public void deleteAll();
	public ArrayList<SurveyModel>selectAll();
}
