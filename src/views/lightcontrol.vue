<template>
    <div>
        <div class="light-state">
            <el-card class="light-box-card">
                <div slot="header">
                    <i class="el-icon-s-opportunity" style="margin-right: 5px"></i>
                    <span>路灯参数</span>
                    <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                </div>
                <div class="light-box-card-main">
                    <el-card class="light-box-card-main-first" shadow="hover">
                        <img src="@/assets/light-image.png" alt="" style="width: 270px; height: 270px">
                    </el-card>
                    <el-card class="light-box-card-main-second" style="width: 450px; height: 370px" shadow="hover">
                        <el-input class="light-search" placeholder="请输入路灯编号" v-model="input" clearable>
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                        <el-divider></el-divider>
                        <div class="parameter-box">
                            <div class="parameter-box-child">
                                <span style="margin-right: 10px">工作状态: </span>
                                <el-switch
                                    v-model="value1"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </div>
                            <div class="parameter-box-child">
                                <span style="margin-right: 10px">电流: </span><span style="margin-right: 10px">1.62 A</span>
                                <el-switch
                                    v-model="value2"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </div>
                            <div class="parameter-box-child">
                                <span style="margin-right: 10px">电压: </span><span style="margin-right: 10px">47.8 V</span>
                                <el-switch
                                    v-model="value3"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </div>
                            <div class="parameter-box-child">
                                <span style="margin-right: 10px">温度: </span><span style="margin-right: 10px">86 ℃</span>
                                <el-switch
                                    v-model="value4"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                                </el-switch>
                            </div>
                        </div>
                    </el-card>
                    
                </div>
            </el-card>  

            <el-card class="control-box-card">
                <div slot="header">
                    <i class="el-icon-place" style="margin-right: 5px"></i>
                    <span>路灯基础控制</span>
                </div>
                <div class="control-card-select-box">
                    <el-card class="control-card-select-box-first" shadow="hover">
                        <div slot="header">
                            <i class="el-icon-sunny" style="margin-right: 5px"></i>
                            <span>控制范围选择</span>
                        </div>
                        <div>
                            <div style="margin-bottom: 10px">
                                <template>
                                <el-radio-group v-model="radio">
                                    <el-radio :label="1">全选</el-radio>
                                    <el-radio :label="2">取消全选</el-radio>
                                </el-radio-group>
                                </template>                                
                            </div>
                            <div style="height: 80px; display: flex; align-items: center">
                                <div style="width: 150px;margin-right: 10px"><el-input v-model="input1" placeholder="请输入内容"></el-input></div>
                                <div>——</div>
                                <div style="width: 150px;margin-left: 10px;margin-right: 10px"><el-input v-model="input2" placeholder="请输入内容"></el-input></div>
                            </div>
                            <div style="display: flex;justify-content: center;margin-left: -105px"><el-button type="primary" size="medium">确认</el-button></div>
                        </div>
                    </el-card>

                    <el-card class="control-card-select-box-second" shadow="hover">
                        <div slot="header">
                            <i class="el-icon-open" style="margin-right: 5px"></i>
                            <span>开关控制</span>
                        </div>
                        <div>
                            <el-switch
                                style="display: block"
                                v-model="value5"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="开"
                                inactive-text="关">
                            </el-switch>
                        </div>
                    </el-card>

                    <el-card class="light-box-card-main-third" shadow="hover">
                        <div slot="header">
                            <i class="el-icon-sunny" style="margin-right: 5px"></i>
                            <span>灯光调节</span>
                        </div>
                        <div class="block">
                            <el-slider v-model="slidervalue"></el-slider>
                        </div>
                    </el-card>
                </div>
            </el-card>          
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                value1: true,
                value2: true,
                value3: true,
                value4: true,
                value5: true,
                slidervalue: 0,
                radio: '',
                lower: '',
                upper: '',
                allswitch: true,
                radio: ''
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
.light-box-card-main {
    display: flex;
    justify-content: flex-start;
}

.light-box-card-main-first{
    width: 370px; 
    height: 370px; 
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

img:hover {
    transform: scale(1.2);
}

.light-search {
    width: 320px;
}

.parameter-box {
    /* background-color: pink; */
    height: 230px;
    border: 1px solid rgb(234, 225, 225);
    border-radius: 4px;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
}

.parameter-box-child {
    margin: 13px 15px;
}

.light-box-card-main-third {
    width: 370px; 
    height: 250px; 
    /* margin-left: 50px; */
}

.control-card-select-box-second {
    width: 370px; 
    height: 250px;
    margin-right: 20px;
}

.control-box-card {
    height: 380px;
    margin-top: 40px;
}

.control-card-select-box {
    height: 250px;
    display: flex;
}

.control-card-select-box-first {
    width: 500px;
    margin-right: 20px;
}


.control-card-select-box-third {
    width: 300px;
    /* margin-left: 50px; */
}

.el-switch.is-checked {
    width: 100px;
}

</style>