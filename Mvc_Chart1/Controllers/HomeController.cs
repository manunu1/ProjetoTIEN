﻿using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Mvc;

namespace Mvc_chart1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpGet]
        public JsonResult GraficoGeral()
        {
            List<object> iDados = new List<object>();
            //Criando dados de exemplo
            DataTable dt = new DataTable();
            dt.Columns.Add("Data", System.Type.GetType("System.String"));
            dt.Columns.Add("Sucesso", System.Type.GetType("System.Int32"));
            dt.Columns.Add("Falha", System.Type.GetType("System.Int32"));
            DataRow dr = dt.NewRow();
            dr["Data"] = "12/03/1998";
            dr["Sucesso"] = 44;
            dr["Falha"] = 56;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "13/08/2018";
            dr["Sucesso"] = 57;
            dr["Falha"] = 43;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "15/03/2018";
            dr["Sucesso"] = 64;
            dr["Falha"] = 36;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "21/08/2018";
            dr["Sucesso"] = 100;
            dr["Falha"] = 0;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            //Percorrendo e extraindo cada DataColumn para List<Object>
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iDados.Add(x);
            }
            //Dados retornados no formato JSON
            return Json(iDados, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult Dese()
        {
            List<object> iDados = new List<object>();
            //Criando dados de exemplo
            DataTable dt = new DataTable();
            dt.Columns.Add("Data", System.Type.GetType("System.String"));
            dt.Columns.Add("Sucesso", System.Type.GetType("System.Int32"));
            dt.Columns.Add("Falha", System.Type.GetType("System.Int32"));
            DataRow dr = dt.NewRow();
            dr["Data"] = "12/03/1998";
            dr["Sucesso"] = 40;
            dr["Falha"] = 60;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "13/08/2018";
            dr["Sucesso"] = 44;
            dr["Falha"] = 56;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "15/03/2018";
            dr["Sucesso"] = 69;
            dr["Falha"] = 31;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "21/08/2018";
            dr["Sucesso"] = 100;
            dr["Falha"] = 0;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            //Percorrendo e extraindo cada DataColumn para List<Object>
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iDados.Add(x);
            }
            //Dados retornados no formato JSON
            return Json(iDados, JsonRequestBehavior.AllowGet);
        }
        public JsonResult QA()
        {
            List<object> iDados = new List<object>();
            //Criando dados de exemplo
            DataTable dt = new DataTable();
            dt.Columns.Add("Data", System.Type.GetType("System.String"));
            dt.Columns.Add("Sucesso", System.Type.GetType("System.Int32"));
            dt.Columns.Add("Falha", System.Type.GetType("System.Int32"));
            DataRow dr = dt.NewRow();
            dr["Data"] = "12/03/1998";
            dr["Sucesso"] = 34;
            dr["Falha"] = 66;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "13/08/2018";
            dr["Sucesso"] = 56;
            dr["Falha"] = 44;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "15/03/2018";
            dr["Sucesso"] = 43;
            dr["Falha"] = 57;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "21/08/2018";
            dr["Sucesso"] = 100;
            dr["Falha"] = 0;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            //Percorrendo e extraindo cada DataColumn para List<Object>
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iDados.Add(x);
            }
            //Dados retornados no formato JSON
            return Json(iDados, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult PreProd()
        {
            List<object> iDados = new List<object>();
            //Criando dados de exemplo
            DataTable dt = new DataTable();
            dt.Columns.Add("Data", System.Type.GetType("System.String"));
            dt.Columns.Add("Sucesso", System.Type.GetType("System.Int32"));
            dt.Columns.Add("Falha", System.Type.GetType("System.Int32"));
            DataRow dr = dt.NewRow();
            dr["Data"] = "12/03/1998";
            dr["Sucesso"] = 30;
            dr["Falha"] = 70;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "13/08/2018";
            dr["Sucesso"] = 64;
            dr["Falha"] = 36;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "15/03/2018";
            dr["Sucesso"] = 45;
            dr["Falha"] = 55;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "21/08/2018";
            dr["Sucesso"] = 100;
            dr["Falha"] = 0;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            //Percorrendo e extraindo cada DataColumn para List<Object>
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iDados.Add(x);
            }
            //Dados retornados no formato JSON
            return Json(iDados, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult Producao()
        {
            List<object> iDados = new List<object>();
            //Criando dados de exemplo
            DataTable dt = new DataTable();
            dt.Columns.Add("Data", System.Type.GetType("System.String"));
            dt.Columns.Add("Sucesso", System.Type.GetType("System.Int32"));
            dt.Columns.Add("Falha", System.Type.GetType("System.Int32"));
            DataRow dr = dt.NewRow();
            dr["Data"] = "12/03/1998";
            dr["Sucesso"] = 41;
            dr["Falha"] = 59;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "13/08/2018";
            dr["Sucesso"] = 78;
            dr["Falha"] = 22;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "15/03/2018";
            dr["Sucesso"] = 47;
            dr["Falha"] = 53;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            dr["Data"] = "21/08/2018";
            dr["Sucesso"] = 100;
            dr["Falha"] = 0;
            dt.Rows.Add(dr);
            dr = dt.NewRow();
            //Percorrendo e extraindo cada DataColumn para List<Object>
            foreach (DataColumn dc in dt.Columns)
            {
                List<object> x = new List<object>();
                x = (from DataRow drr in dt.Rows select drr[dc.ColumnName]).ToList();
                iDados.Add(x);
            }
            //Dados retornados no formato JSON
            return Json(iDados, JsonRequestBehavior.AllowGet);
        }
    }
}
