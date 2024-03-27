<template>
    <div>
        <div class="circle"></div>
        <div class="box">
            <div class="card-main">
                <div class="card-details">
                    <p class="text-title">路灯智能监控系统</p>
                    <p class="text-body">欢迎您的使用</p>
                </div>
                <button class="card-button">Hello</button>
            </div>
            <div class="card">
                <p class="card-title">公告：</p>
                <p class="small-desc">
                    暂无公告
                </p>
                <div class="go-corner">
                    <div class="go-arrow">→</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.circle {
  width: 140%;
  height: 300px;
  background: #517fe9;
  border-radius: 0 0 50% 50%;
  margin-left: -20%;
}

.box {
  height: 500px;
  margin: -100px 100px 0;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.card-title {
  color: #262626;
  font-size: 1.5em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.small-desc {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  color: #452c2c;
}

.small-desc {
  font-size: 1em;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2em;
  height: 2em;
  overflow: hidden;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #6293c8, #384c6c);
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card {
  display: block;
  position: relative;
  width: 400px;
  height: 400px;
  background-color: #f2f8f9;
  border-radius: 15px;
  padding: 2em 1.2em;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
  font-family: Arial, Helvetica, sans-serif;
}

.card:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: linear-gradient(135deg, #364a60, #384c6c);
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
}

.card:hover:before {
  transform: scale(28);
}

.card:hover .small-desc {
  transition: all 0.5s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card:hover .card-title {
  transition: all 0.5s ease-out;
  color: #ffffff;
}

//
.card-main {
 width: 300px;
 height: 300px;
 margin-left: -100px;
 margin-right: 200px;
 border-radius: 20px;
 background: #f5f5f5;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;

}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
 font-size: 2em;
 font-weight: bold;
}

/*Hover*/
.card-main:hover {
 border-color: #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card-main:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}

</style>