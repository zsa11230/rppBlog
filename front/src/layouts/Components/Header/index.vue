<template>
  <header class="layout-header">
    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
              <tr>
                <td width="110" align="left">
                  <a href="/" name="top" title="way to explore">
                    <div id="Logo"></div>
                  </a>
                </td>
                <td width="auto" align="left">
                  <div id="Search">
                    <form
                      action="https://www.google.com"
                      onsubmit="return dispatch()"
                      target="_blank"
                    >
                      <div id="qbar">
                        <input
                          type="text"
                          maxlength="40"
                          name="q"
                          id="q"
                          value
                          onfocus="$('#qbar').addClass('qbar_focus')"
                          onblur="$('#qbar').removeClass('qbar_focus')"
                        />
                      </div>
                    </form>
                  </div>
                </td>
                <td width="570" align="right" style="padding-top: 2px;">
                  <a href="/" class="top">首页</a>&nbsp;&nbsp;&nbsp;
                  <a href="/signup" class="top">注册</a>&nbsp;&nbsp;&nbsp;
                  <a href="/signin" class="top">登录</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
div {
    display: block;
}
#Top {
  text-align: center;
  background-color: #f9f9f9;
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  background-size: 44px 44px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0 20px;
}
a.top:link,
a.top:visited {
  color: #556;
  text-decoration: none;
}
#Logo {
  width: 94px;
  height: 30px;
  background-image: url(https://www.v2ex.com/static/img/v2ex@2x.png);
  background-size: 94px 30px;
  background-repeat: no-repeat;
  display: inline-block;
}
#qbar {
  width: 276px;
  height: 28px;
  background-size: 276px 28px;
  background-image: url(https://www.v2ex.com/static/img/qbar_light@2x.png);
  background-repeat: no-repeat;
  display: inline-block;
}

#q {
    border: none;
    width: 222px;
    height: 26px;
    margin: 0 0 2px 30px;
    background-color: transparent;
    font-family: helvetica neue,luxi sans,dejavu sans,Tahoma,hiragino sans gb,STHeiti!important;
    font-size: 14px;
    line-height: 16px;
    outline: 0;
}
</style>


<script>
// import { mapGetters, mapMutations, mapActions } from "vuex";
// export default {
//   data() {
//     return {};
//   },
//   computed: {
//     ...mapGetters(["siderbar_collapsed", "username"])
//   },
//   methods: {
//     ...mapMutations({
//       handleToggle: "SET_SIDERBAR_COLLAPSED"
//     }),
//     ...mapActions(["userLogout"]),
//     handleCenter() {
//       console.log("center");
//     },
//     handleLogout() {
//       console.log("logout");
//       this.userLogout();
//       this.$openPage("/login");
//     }
//   }
// };
</script>
