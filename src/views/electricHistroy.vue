<template>
    <div>
        <div class="histroy-box">
            <div class="date-picker">
                <div style="margin-bottom: 10px">
                    <i class="el-icon-document"></i>
                    <span style="margin-left: 10px; font-size: 14px; color: #8492a6">请选择查询范围</span>
                </div>
                <el-date-picker
                    v-model="value"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <el-button type="primary" icon="el-icon-search" style="margin-left: 10px" @click="drawmychars">查询</el-button>
            </div>
            <el-divider></el-divider>
            <el-card class="data-card-first">
                <div slot="header">
                    <span>参数图</span>
                    <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                </div>
                <div id="electric-char" style="width: 1700px; height: 600px"></div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            dayList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            currentList: [1.58,1.62,1.68,1.66,1.60,1.55,1.63],
            voltageList: [47.2,47.9,47.6,47,46.9,48.1,48.3],
            powerList: [74.6,77.6,78.0,78.0,75.0,74.6,78.7]
        }
    },
    methods: {
        myfirstchar() {          
            let myChart = this.$echarts.getInstanceByDom(document.getElementById("electric-char"))
            if (myChart == null) {
                myChart = this.$echarts.init(document.getElementById("electric-char"))
            }
            myChart.setOption ({
            title: {
                text: '电参数折线图',
                textStyle: {
                    color: 'gray',
                    fontSize: 17,
                    fontWeight: 400
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['电流', '电压', '功率']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.dayList
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                name: '电流',
                type: 'line',
                stack: 'Total',
                data: this.currentList
                },
                {
                name: '电压',
                type: 'line',
                stack: 'Total',
                data: this.voltageList
                },
                {
                name: '功率',
                type: 'line',
                stack: 'Total',
                data: this.powerList
                }
            ]
            })
        },
        drawmychars() {
            this.myfirstchar()
        }
    }
}
</script>

<style scoped>
.histroy-box {
    padding-top: 20px;
    border-top: 1px solid gray;
}
</style>