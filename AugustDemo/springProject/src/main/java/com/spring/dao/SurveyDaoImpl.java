package com.spring.dao;

import java.net.ConnectException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import com.spring.daoInterface.SurveyDaoInterface;
import com.spring.model.SurveyModel;


public class SurveyDaoImpl implements SurveyDaoInterface {
	
	
	public void save(SurveyModel model){  
		try{  
		Class.forName("com.mysql.jdbc.Driver");  
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/assignment","root","root");  
		
		Statement stmt =con.createStatement();  
		String sql = "Insert into survey(index_no,type_no,value_no) values('"+model.getIndex()+"','"+model.getType()+"','"+model.getValue()+"')";
		System.out.println(sql);
		stmt.executeUpdate(sql);  
		System.out.println("Inserted records into the table...");
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
		}  

	public void deleteAll() {
		try{  
			Class.forName("com.mysql.jdbc.Driver");  
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/assignment","root","root");  
			
			Statement stmt =con.createStatement();  
			String sql = "delete from survey";
			System.out.println(sql);
			stmt.executeUpdate(sql);  
			System.out.println("Delete records from the table...");
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
	}

	public ArrayList<SurveyModel> selectAll() {
		
		ArrayList<SurveyModel> modelList = new ArrayList<SurveyModel>();
		
		try{  
			
			Class.forName("com.mysql.jdbc.Driver");  
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/assignment","root","root");  
			
			Statement stmt =con.createStatement();  
			String sql = "select index_no, type_no, value_no FROM survey";
		      ResultSet rs = stmt.executeQuery(sql);
		      while(rs.next()){
		    	  SurveyModel model = new SurveyModel();
		          //Retrieve by column name
		          String indexNo  = rs.getString("index_no");
		          String typeNo = rs.getString("type_no");
		          String valueNo = rs.getString("value_no");
		          
		          model.setIndex(indexNo);
		          model.setType(typeNo);
		          model.setValue(valueNo);
		          modelList.add(model);
		      }
			con.close();  
			}catch(Exception e){ System.out.println(e);
			}  
		return modelList;
			}
	
}

	
