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
                <div id="temp-char" style="width: 1700px; height: 600px"></div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        myfirstchar() {          
            let myChart = this.$echarts.getInstanceByDom(document.getElementById("temp-char"))
            if (myChart == null) {
                myChart = this.$echarts.init(document.getElementById("temp-char"))
            }
            myChart.setOption ({
                title: {
                text: '温度柱状图',
                textStyle: {
                    color: 'gray',
                    fontSize: 17,
                    fontWeight: 400
                }
                },
                xAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [65, 80, 72, 86, 69, 78, 86],
                        type: 'bar'
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