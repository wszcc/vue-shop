<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据统计</el-breadcrumb-item>
            <el-breadcrumb-item>数据报表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div id="main" style="width: 1000px;height:400px;"></div>
        </el-card>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'report',
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            var myChart = echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            this.$http.get('reports/type/1')
            .then(res=>{
                const newObj={...option,...res.data.data}
                myChart.setOption(newObj);
            })
            // 使用刚指定的配置项和数据显示图表。
            
        },
    }
</script>
<style>

</style>