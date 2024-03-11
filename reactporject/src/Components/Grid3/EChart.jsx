// 安装echarts
//  npm i echarts
import React, { useEffect, useRef } from "react"
import * as echarts from "echarts"

function EChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    const option = {
      // tooltip: {
      //   trigger: "item"
      // },
      legend: {
        show: false,
        top: "5%",
        left: "center"
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "55%"],
          avoidLabelOverlap: true,

          itemStyle: {
            borderRadius: 1,
            borderColor: "#fff",
            borderWidth: 6
          },
          label: {
            show: true,
            position: "center",
            fontSize: 14,
            fontWeight: "normal",
            color: "#32475c99",

            formatter: function (params) {
              console.log(params)
              if (params.seriesIndex === 0) {
                console.log("index" + params.seriesIndex)
                console.log("name" + params.name)
                // return "{p|" + params.value + "%} \n {nm|" + params.name + "}"
                return " 38%" + "\n" + "Weekly"
              } else {
                return params.value + "\n" + params.name
              }
            }
          },
          emphasis: {
            itemStyle: {
              scaleSize: 1 //鼠标hover的时候bar的尺寸不会改变
            },
            label: {
              show: true, //显示label
              fontSize: 16,
              fontWeight: "normal",
              color: "#32475c99",
              backgroundColor: "#fff",
              //鼠标hover的时候显示对应的内容和数据：
              formatter: function (params) {
                return params.value + "\n" + params.name
              }
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 80, name: "Electronic" },
            { value: 45, name: "Fashion" },

            { value: 20, name: "Sports" },
            { value: 40, name: "Decor" }
          ],
          color: ["rgb(113, 221, 55)", "rgb(105, 108, 255)", "rgb(133, 146, 163)", "rgb(3,195,236)"]
        }
      ]
    }

    option && myChart.setOption(option)

    return () => {
      myChart.dispose()
    }
  }, [])

  return <div id="main" style={{ width: "100%", height: "400px" }} ref={chartRef} />
}

export default EChart
