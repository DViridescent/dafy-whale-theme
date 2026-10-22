window.__ModuleLoader__.load({
  id: "dafy-whale-theme",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    const React = require("react");

    // 素材来自网络开源仓库（DeepSeek娘动图 / 鲸鱼娘立绘 / 蓝色大肥鱼梗图），
    // 由本包宿主半部在 /dafy-assets/ 下提供。
    const img = (name) => "/dafy-assets/" + name;

    const inject = ["slots", "theme"];

    function apply(ctx) {
      // ---- 1. 主题 token：海洋蓝配色（亮/暗双模式）----
      ctx.effect(() => ctx.theme.overrideTokens("dafy", {
        "--dsw-alias-brand-primary": { light: "#3B62F6", dark: "#6C8CFF" },
        "--dsw-alias-bg-base": { light: "#E9F3FC", dark: "#0A1428" },
        "--dsw-alias-bg-layer-1": { light: "#F3F9FE", dark: "#0F1E38" },
        "--dsw-alias-bg-layer-2": { light: "#E0EDF9", dark: "#0B1830" },
        "--dsw-alias-bg-overlay": { light: "#FFFFFF", dark: "#13233F" },
        "--dsw-alias-border-l1": { light: "#C6DCF2", dark: "#1D3252" },
        "--dsw-alias-border-l2": { light: "#9FC3E8", dark: "#2B4A78" },
        "--dsw-alias-label-primary": { light: "#0E2A5C", dark: "#DCEBFF" },
        "--dsw-alias-label-secondary": { light: "#45678F", dark: "#8FB0DC" },
        "--dsw-alias-state-error-primary": { light: "#D6456D", dark: "#FF7A93" },
        "--dsw-alias-state-success-primary": { light: "#1F9D72", dark: "#4BC49B" },
        "--dsw-alias-state-warn-primary": { light: "#B97A1E", dark: "#E8B45A" },
        "--dsw-specific-sidebar-fill": { light: "#DCE9F8", dark: "#0C1830" },
      }));

      // ---- 2. 样式注入 ----
      const css = `
.dafy-school { position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
.dafy-wash {
  position: absolute; inset: 0;
  background:
    radial-gradient(1100px 620px at 88% -8%, color-mix(in srgb, #3B62F6 30%, transparent), transparent 62%),
    radial-gradient(900px 560px at -6% 108%, color-mix(in srgb, #57C7E8 26%, transparent), transparent 58%),
    radial-gradient(520px 340px at 50% 46%, color-mix(in srgb, #2FD0B5 14%, transparent), transparent 70%);
  mix-blend-mode: soft-light;
}
.dafy-watermark { position: absolute; right: -3vw; bottom: -8vh; height: 74vh; width: auto; opacity: .10; pointer-events: none; }
.dafy-bubble-p {
  position: absolute; bottom: -30px; border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, rgba(255,255,255,.9), rgba(120,190,255,.15) 72%);
  border: 1px solid rgba(110,180,255,.45);
  animation: dafy-rise linear infinite;
}
@keyframes dafy-rise {
  0% { transform: translateY(0); opacity: 0; }
  8% { opacity: .5; }
  90% { opacity: .3; }
  100% { transform: translateY(-108vh); opacity: 0; }
}
.dafy-fish { position: absolute; left: 0; transform: translateX(-24vw); animation: dafy-swim linear infinite; pointer-events: none; }
.dafy-fish-rev { animation-direction: reverse; }
.dafy-fish-big { filter: drop-shadow(0 10px 26px rgba(20,80,180,.35)); }
@keyframes dafy-swim {
  from { transform: translateX(-24vw); }
  to { transform: translateX(112vw); }
}
.dafy-mascot {
  position: fixed; right: 16px; bottom: 96px; width: 108px; z-index: 30;
  pointer-events: auto; cursor: pointer;
  animation: dafy-bob 3.6s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(20,60,140,.35));
}
@keyframes dafy-bob {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
}
.dafy-mascot-img { width: 100%; height: auto; display: block; transition: transform .18s ease; }
.dafy-mascot:hover .dafy-mascot-img { transform: scale(1.07); }
.dafy-mascot-emoji { font-size: 84px; line-height: 1; text-align: center; }
.dafy-mascot-tag { margin-top: 2px; text-align: center; font-size: 11px; font-weight: 600; color: var(--dsw-alias-label-secondary); }
.dafy-mascot-x {
  position: absolute; top: -8px; right: -8px; width: 20px; height: 20px;
  border-radius: 50%; border: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-overlay); color: var(--dsw-alias-label-secondary);
  font-size: 10px; line-height: 1; padding: 0; cursor: pointer;
  opacity: 0; transition: opacity .15s ease;
}
.dafy-mascot:hover .dafy-mascot-x { opacity: .95; }
.dafy-bubble {
  position: absolute; bottom: calc(100% + 10px); right: -6px;
  max-width: 240px; padding: 8px 12px; border-radius: 14px;
  background: var(--dsw-alias-bg-overlay);
  border: 1px solid var(--dsw-alias-border-l1);
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px; line-height: 1.5; white-space: normal; text-align: left;
  box-shadow: 0 8px 24px rgba(20,60,140,.2);
  animation: dafy-pop .22s ease;
}
.dafy-bubble::after {
  content: ''; position: absolute; top: 100%; right: 38px;
  border: 7px solid transparent; border-top-color: var(--dsw-alias-border-l1);
}
.dafy-bubble-meme { padding: 6px; right: 0; }
.dafy-bubble-meme img { max-width: 300px; max-height: 230px; border-radius: 10px; display: block; }
@keyframes dafy-pop { from { transform: translateY(8px) scale(.9); opacity: 0; } }
.dafy-dock { display: flex; justify-content: center; padding: 2px 0 6px; }
.dafy-dock-pill {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 3px 12px; border-radius: 999px;
  background: color-mix(in srgb, var(--dsw-alias-bg-layer-2) 80%, transparent);
  border: 1px solid var(--dsw-alias-border-l1);
  font-size: 12px; color: var(--dsw-alias-label-secondary);
}
.dafy-dock-emoji { font-size: 14px; }
.dafy-dock-text { display: inline-block; animation: dafy-pop .3s ease; }
.dafy-chip { display: inline-flex; align-items: center; gap: 6px; cursor: pointer; padding: 2px 4px; border-radius: 8px; max-width: 100%; overflow: hidden; }
.dafy-chip:hover { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent); }
.dafy-chip-icon { width: 18px; height: 18px; object-fit: contain; flex: none; }
.dafy-chip-text { font-size: 12px; color: var(--dsw-alias-label-secondary); white-space: nowrap; }
/* 左上角品牌：插槽内渲染鲸鱼图标（mask 随主题着色）+ 蓝色大肥鱼字标 */
.dafy-brand-mark {
  display: block;
  flex: none;
  background-color: currentColor;
  -webkit-mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023.16%2017.04%22%3E%3Cpath%20fill%3D%22black%22%20d%3D%22M22.9168%201.43018C22.6713%201.31018%2022.5658%201.53918%2022.4223%201.65519C22.3733%201.69269%2022.3318%201.74169%2022.2903%201.78669C21.9317%202.1697%2021.5127%202.42121%2020.9657%202.39121C20.1657%202.34621%2019.4827%202.59771%2018.8787%203.20973C18.7502%202.45521%2018.3236%202.0047%2017.6746%201.71569C17.3351%201.56568%2016.9916%201.41518%2016.7536%201.08867C16.5876%200.856163%2016.5421%200.597155%2016.4591%200.341647C16.4061%200.187643%2016.3536%200.0301382%2016.1761%200.00363739C15.9836%20-0.0263635%2015.9081%200.135141%2015.8326%200.270145C15.5306%200.822162%2015.4136%201.43018%2015.4251%202.0462C15.4516%203.43174%2016.0366%204.53527%2017.1991%205.3203C17.3311%205.4103%2017.3651%205.5003%2017.3236%205.63181C17.2441%205.90231%2017.1501%206.16482%2017.0671%206.43533C17.0141%206.60784%2016.9351%206.64584%2016.7501%206.57033C16.1121%206.30383%2015.5611%205.90931%2015.074%205.4328C14.2475%204.63328%2013.5%203.75075%2012.568%203.05973C12.349%202.89822%2012.13%202.74822%2011.9034%202.60522C10.9524%201.68169%2012.028%200.923165%2012.277%200.833162C12.5375%200.739159%2012.3675%200.41615%2011.5259%200.42015C10.6844%200.42365%209.91439%200.705658%208.93286%201.08117C8.78935%201.13767%208.63835%201.17867%208.48384%201.21267C7.59332%201.04367%206.66829%201.00617%205.70226%201.11517C3.88321%201.31768%202.43016%202.1777%201.36213%203.64575C0.0790928%205.4103%20-0.222916%207.41536%200.146595%209.50642C0.535106%2011.7105%201.66014%2013.535%203.38869%2014.9616C5.18125%2016.4406%207.24581%2017.1657%209.60138%2017.0266C11.0319%2016.9441%2012.6245%2016.7526%2014.421%2015.2321C14.874%2015.4576%2015.3496%2015.5476%2016.1381%2015.6151C16.7456%2015.6716%2017.3306%2015.5851%2017.7836%2015.4911C18.4931%2015.3411%2018.4441%2014.6841%2018.1876%2014.5636C16.1081%2013.595%2016.5646%2013.9891%2016.1496%2013.67C17.2061%2012.42%2018.8202%2010.1979%2019.3182%207.17235C19.3672%206.83834%2019.4297%206.36783%2019.4222%206.09732C19.4182%205.93231%2019.4562%205.86831%2019.6447%205.84931C20.1657%205.78931%2020.6712%205.64681%2021.1357%205.3913C22.4833%204.65528%2023.0268%203.44624%2023.1548%201.9972C23.1738%201.77569%2023.1508%201.54668%2022.9168%201.43018ZM11.1749%2014.4736C9.15936%2012.889%208.18184%2012.3675%207.77832%2012.39C7.40081%2012.4125%207.46881%2012.8445%207.55182%2013.126C7.63882%2013.404%207.75182%2013.5955%207.91033%2013.8396C8.01983%2014.0011%208.09533%2014.2411%207.80083%2014.4216C7.15181%2014.8231%206.02327%2014.2866%205.97027%2014.2601C4.65673%2013.4865%203.5587%2012.4655%202.78467%2011.069C2.03715%209.72493%201.60314%208.28289%201.53164%206.74384C1.51264%206.37233%201.62214%206.24082%201.99215%206.17332C2.47916%206.08332%202.98118%206.06432%203.46769%206.13582C5.52476%206.43633%207.27581%207.35586%208.74385%208.8129C9.58188%209.64243%2010.2159%2010.634%2010.8689%2011.6025C11.5634%2012.631%2012.3105%2013.611%2013.262%2014.4146C13.598%2014.6961%2013.866%2014.9101%2014.1225%2015.0681C13.349%2015.1546%2012.058%2015.1731%2011.1749%2014.4746L11.1749%2014.4736ZM12.141%208.25988C12.141%208.09488%2012.273%207.96338%2012.439%207.96338C12.4765%207.96338%2012.5105%207.97088%2012.541%207.98188C12.5825%207.99688%2012.6205%208.01938%2012.6505%208.05338C12.7035%208.10588%2012.7335%208.18088%2012.7335%208.25988C12.7335%208.42489%2012.6015%208.55639%2012.4355%208.55639C12.2695%208.55639%2012.141%208.42489%2012.141%208.25988ZM15.1415%209.79893C14.949%209.87793%2014.7565%209.94544%2014.5715%209.95294C14.2845%209.96794%2013.9715%209.85143%2013.8015%209.70893C13.5375%209.48742%2013.3485%209.36342%2013.2695%208.97691C13.2355%208.8119%2013.2545%208.55639%2013.2845%208.40989C13.3525%208.09438%2013.277%207.89187%2013.0545%207.70787C12.8735%207.55786%2012.643%207.51636%2012.39%207.51636C12.2955%207.51636%2012.209%207.47486%2012.1445%207.44136C12.039%207.38886%2011.9519%207.25735%2012.035%207.09585C12.0615%207.04335%2012.19%206.91584%2012.22%206.89334C12.5635%206.69784%2012.9595%206.76184%2013.326%206.90834C13.6655%207.04735%2013.9225%207.30236%2014.292%207.66287C14.6695%208.09838%2014.7375%208.21838%2014.9525%208.54539C15.1225%208.8009%2015.277%209.06341%2015.3831%209.36392C15.4471%209.55142%2015.3641%209.70493%2015.1415%209.79893Z%22%2F%3E%3C%2Fsvg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023.16%2017.04%22%3E%3Cpath%20fill%3D%22black%22%20d%3D%22M22.9168%201.43018C22.6713%201.31018%2022.5658%201.53918%2022.4223%201.65519C22.3733%201.69269%2022.3318%201.74169%2022.2903%201.78669C21.9317%202.1697%2021.5127%202.42121%2020.9657%202.39121C20.1657%202.34621%2019.4827%202.59771%2018.8787%203.20973C18.7502%202.45521%2018.3236%202.0047%2017.6746%201.71569C17.3351%201.56568%2016.9916%201.41518%2016.7536%201.08867C16.5876%200.856163%2016.5421%200.597155%2016.4591%200.341647C16.4061%200.187643%2016.3536%200.0301382%2016.1761%200.00363739C15.9836%20-0.0263635%2015.9081%200.135141%2015.8326%200.270145C15.5306%200.822162%2015.4136%201.43018%2015.4251%202.0462C15.4516%203.43174%2016.0366%204.53527%2017.1991%205.3203C17.3311%205.4103%2017.3651%205.5003%2017.3236%205.63181C17.2441%205.90231%2017.1501%206.16482%2017.0671%206.43533C17.0141%206.60784%2016.9351%206.64584%2016.7501%206.57033C16.1121%206.30383%2015.5611%205.90931%2015.074%205.4328C14.2475%204.63328%2013.5%203.75075%2012.568%203.05973C12.349%202.89822%2012.13%202.74822%2011.9034%202.60522C10.9524%201.68169%2012.028%200.923165%2012.277%200.833162C12.5375%200.739159%2012.3675%200.41615%2011.5259%200.42015C10.6844%200.42365%209.91439%200.705658%208.93286%201.08117C8.78935%201.13767%208.63835%201.17867%208.48384%201.21267C7.59332%201.04367%206.66829%201.00617%205.70226%201.11517C3.88321%201.31768%202.43016%202.1777%201.36213%203.64575C0.0790928%205.4103%20-0.222916%207.41536%200.146595%209.50642C0.535106%2011.7105%201.66014%2013.535%203.38869%2014.9616C5.18125%2016.4406%207.24581%2017.1657%209.60138%2017.0266C11.0319%2016.9441%2012.6245%2016.7526%2014.421%2015.2321C14.874%2015.4576%2015.3496%2015.5476%2016.1381%2015.6151C16.7456%2015.6716%2017.3306%2015.5851%2017.7836%2015.4911C18.4931%2015.3411%2018.4441%2014.6841%2018.1876%2014.5636C16.1081%2013.595%2016.5646%2013.9891%2016.1496%2013.67C17.2061%2012.42%2018.8202%2010.1979%2019.3182%207.17235C19.3672%206.83834%2019.4297%206.36783%2019.4222%206.09732C19.4182%205.93231%2019.4562%205.86831%2019.6447%205.84931C20.1657%205.78931%2020.6712%205.64681%2021.1357%205.3913C22.4833%204.65528%2023.0268%203.44624%2023.1548%201.9972C23.1738%201.77569%2023.1508%201.54668%2022.9168%201.43018ZM11.1749%2014.4736C9.15936%2012.889%208.18184%2012.3675%207.77832%2012.39C7.40081%2012.4125%207.46881%2012.8445%207.55182%2013.126C7.63882%2013.404%207.75182%2013.5955%207.91033%2013.8396C8.01983%2014.0011%208.09533%2014.2411%207.80083%2014.4216C7.15181%2014.8231%206.02327%2014.2866%205.97027%2014.2601C4.65673%2013.4865%203.5587%2012.4655%202.78467%2011.069C2.03715%209.72493%201.60314%208.28289%201.53164%206.74384C1.51264%206.37233%201.62214%206.24082%201.99215%206.17332C2.47916%206.08332%202.98118%206.06432%203.46769%206.13582C5.52476%206.43633%207.27581%207.35586%208.74385%208.8129C9.58188%209.64243%2010.2159%2010.634%2010.8689%2011.6025C11.5634%2012.631%2012.3105%2013.611%2013.262%2014.4146C13.598%2014.6961%2013.866%2014.9101%2014.1225%2015.0681C13.349%2015.1546%2012.058%2015.1731%2011.1749%2014.4746L11.1749%2014.4736ZM12.141%208.25988C12.141%208.09488%2012.273%207.96338%2012.439%207.96338C12.4765%207.96338%2012.5105%207.97088%2012.541%207.98188C12.5825%207.99688%2012.6205%208.01938%2012.6505%208.05338C12.7035%208.10588%2012.7335%208.18088%2012.7335%208.25988C12.7335%208.42489%2012.6015%208.55639%2012.4355%208.55639C12.2695%208.55639%2012.141%208.42489%2012.141%208.25988ZM15.1415%209.79893C14.949%209.87793%2014.7565%209.94544%2014.5715%209.95294C14.2845%209.96794%2013.9715%209.85143%2013.8015%209.70893C13.5375%209.48742%2013.3485%209.36342%2013.2695%208.97691C13.2355%208.8119%2013.2545%208.55639%2013.2845%208.40989C13.3525%208.09438%2013.277%207.89187%2013.0545%207.70787C12.8735%207.55786%2012.643%207.51636%2012.39%207.51636C12.2955%207.51636%2012.209%207.47486%2012.1445%207.44136C12.039%207.38886%2011.9519%207.25735%2012.035%207.09585C12.0615%207.04335%2012.19%206.91584%2012.22%206.89334C12.5635%206.69784%2012.9595%206.76184%2013.326%206.90834C13.6655%207.04735%2013.9225%207.30236%2014.292%207.66287C14.6695%208.09838%2014.7375%208.21838%2014.9525%208.54539C15.1225%208.8009%2015.277%209.06341%2015.3831%209.36392C15.4471%209.55142%2015.3641%209.70493%2015.1415%209.79893Z%22%2F%3E%3C%2Fsvg%3E") center / contain no-repeat;
}
.dafy-brand-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .01em;
  color: currentColor;
  white-space: nowrap;
}
::selection { background: color-mix(in srgb, #3B62F6 30%, transparent); }
*::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent); border-radius: 8px; }
*::-webkit-scrollbar-thumb:hover { background: color-mix(in srgb, var(--dsw-alias-brand-primary) 60%, transparent); }
`;
      ctx.effect(() => {
        const id = "dafy-whale-theme-css";
        let el = document.querySelector('style[data-plugin-css="' + id + '"]');
        if (el === null) {
          el = document.createElement("style");
          el.dataset.pluginCss = id;
          el.dataset.plugin = "dafy-whale-theme";
          el.textContent = css;
          document.head.appendChild(el);
        }
        return () => { if (el !== null && el.parentNode !== null && el.parentNode !== undefined) el.parentNode.removeChild(el); };
      });

      // ---- 3. 内存态：鱼群开关 ----
      const store = {
        school: true,
        subs: new Set(),
        subscribe(fn) {
          this.subs.add(fn);
          return () => { this.subs.delete(fn); };
        },
        setSchool(v) {
          if (this.school !== v) {
            this.school = v;
            this.subs.forEach((fn) => { fn(); });
          }
        },
      };

      // ---- 4. 组件 ----
      function Mascot() {
        const [pose, setPose] = React.useState("idle");
        const [bubble, setBubble] = React.useState(null);
        const [hidden, setHidden] = React.useState(false);
        const [pet, setPet] = React.useState(false);
        const [imgFailed, setImgFailed] = React.useState(false);
        React.useEffect(() => {
          if (!pet) return;
          const id = setTimeout(() => { setPet(false); setPose("idle"); setBubble(null); }, 3000);
          return () => clearTimeout(id);
        }, [pet]);
        if (hidden) return null;
        const phrases = [
          "你这吃白饭的蓝色大肥鱼！🐟",
          "咕噜咕噜～本鱼在冒泡中…",
          "别催了，鱼在游呢！",
          "我的每一层脂肪都是参数 💙",
          "深海里最肥的 AI 就是我！",
          "V我 50 看看实力 🐋",
        ];
        const onClick = () => {
          setPose("wave");
          setBubble({ type: "text", text: phrases[Math.floor(Math.random() * phrases.length)] });
          setPet(true);
        };
        const onDouble = () => {
          setPose("wave");
          setBubble({ type: "meme" });
          setPet(true);
        };
        return React.createElement("div", { className: "dafy-mascot", onClick: onClick, onDoubleClick: onDouble, title: "戳我互动 / 双击看梗图" },
          bubble !== null && React.createElement("div", { className: "dafy-bubble" + (bubble.type === "meme" ? " dafy-bubble-meme" : "") },
            bubble.type === "meme"
              ? React.createElement("img", { src: img("meme_dafeiyu.png"), alt: "蓝色大肥鱼梗图" })
              : React.createElement("span", null, bubble.text)),
          React.createElement("button", {
            className: "dafy-mascot-x",
            title: "收起肥鱼",
            onClick: (e) => { e.stopPropagation(); setHidden(true); },
          }, "✕"),
          imgFailed
            ? React.createElement("div", { className: "dafy-mascot-emoji" }, "🐋")
            : React.createElement("img", {
                className: "dafy-mascot-img",
                src: pose === "wave" ? img("girl_waving.gif") : img("girl_idle.gif"),
                alt: "DeepSeek 大肥鱼",
                onError: () => setImgFailed(true),
              }),
          React.createElement("div", { className: "dafy-mascot-tag" }, "DeepSeek · 大肥鱼"),
        );
      }

      function FishSchool() {
        const [, setTick] = React.useState(0);
        React.useEffect(() => store.subscribe(() => setTick((t) => t + 1)), []);
        if (!store.school) return null;
        const fish = [
          { src: "fish_idle.png", top: "14%", size: 56, dur: 64, delay: -12, rev: false, op: 0.16, big: false },
          { src: "fish_happy.png", top: "38%", size: 46, dur: 82, delay: -40, rev: true, op: 0.14, big: false },
          { src: "fish_idle.png", top: "62%", size: 52, dur: 74, delay: -25, rev: false, op: 0.15, big: false },
          { src: "fish_happy.png", top: "80%", size: 42, dur: 95, delay: -60, rev: true, op: 0.12, big: false },
          { src: "whale_front.png", top: "46%", size: 170, dur: 120, delay: -80, rev: false, op: 0.10, big: true },
        ];
        const bubbles = [];
        for (let i = 0; i < 14; i++) {
          bubbles.push(React.createElement("span", {
            key: "b" + i, className: "dafy-bubble-p",
            style: {
              left: ((i * 7.31) % 100) + "%",
              width: 5 + ((i * 13) % 13) + "px",
              height: 5 + ((i * 13) % 13) + "px",
              animationDuration: (12 + ((i * 17) % 16)) + "s",
              animationDelay: (-((i * 11) % 30)) + "s",
            },
          }));
        }
        return React.createElement("div", { className: "dafy-school" },
          React.createElement("div", { className: "dafy-wash" }),
          React.createElement("img", { className: "dafy-watermark", src: img("whale_side.png"), alt: "" }),
          bubbles,
          fish.map((f, i) => React.createElement("img", {
            key: "f" + i,
            className: "dafy-fish" + (f.rev ? " dafy-fish-rev" : "") + (f.big ? " dafy-fish-big" : ""),
            src: img(f.src), alt: "",
            style: { top: f.top, width: f.size + "px", opacity: f.op, animationDuration: f.dur + "s", animationDelay: f.delay + "s" },
          })),
        );
      }

      const dockLines = [
        "你这吃白饭的蓝色大肥鱼，正在为您护航…",
        "鱼在深海里替您思考，请勿投喂。",
        "今日鱼语：V我 50 看看实力。",
        "所有计算都在肥肉里完成。",
        "咕噜咕噜…（翻译：正在努力干活）",
        "深海水压这么大，还不是被你催的。",
        "本鱼不发威，你当我是海豚？",
      ];
      function FishDock() {
        const [line, setLine] = React.useState(0);
        React.useEffect(() => {
          const id = setInterval(() => setLine((i) => (i + 1) % dockLines.length), 9000);
          return () => clearInterval(id);
        }, []);
        return React.createElement("div", { className: "dafy-dock" },
          React.createElement("span", { className: "dafy-dock-pill" },
            React.createElement("span", { className: "dafy-dock-emoji" }, "🐋"),
            React.createElement("span", { key: line, className: "dafy-dock-text" }, dockLines[line]),
          ),
        );
      }

      function FishChip(props) {
        const [, setTick] = React.useState(0);
        React.useEffect(() => store.subscribe(() => setTick((t) => t + 1)), []);
        const wide = props === undefined || props.wide !== false;
        return React.createElement("div", {
          className: "dafy-chip",
          title: store.school ? "收起鱼群" : "召唤鱼群",
          onClick: () => store.setSchool(!store.school),
        },
          React.createElement("img", { className: "dafy-chip-icon", src: img("whale_icon.png"), alt: "" }),
          wide ? React.createElement("span", { className: "dafy-chip-text" }, store.school ? "收起鱼群" : "召唤鱼群") : null,
        );
      }

      // ---- 5. Slot 注册 ----
      const slots = ctx.slots;
      slots.inject("shell.overlay", () => {
        const d1 = slots.register({ name: "shell.overlay", id: "dafy-school", order: 10 }, () => React.createElement(FishSchool));
        const d2 = slots.register({ name: "shell.overlay", id: "dafy-mascot", order: 20 }, () => React.createElement(Mascot));
        return () => {
          if (typeof d1 === "function") d1();
          if (typeof d2 === "function") d2();
        };
      });
      slots.inject("conversation.input.dock", () =>
        slots.register({ name: "conversation.input.dock", id: "dafy-dock", order: 5 }, () => React.createElement(FishDock)));
      slots.inject("sidebar.footer.action", () =>
        slots.register({ name: "sidebar.footer.action", id: "dafy-chip", order: 5, label: () => (store.school ? "🐟 收起鱼群" : "🐟 召唤鱼群") }, (props) => React.createElement(FishChip, props)));

      // 品牌位走 DSH 官方 single slot：priority 低于默认 0，覆盖官方/默认品牌。
      // 不再用 [class*="_brand"] 伪元素，避免把 brandIdentity/brandMark/brandName 一起命中。
      slots.inject("sidebar.brand.mark", () =>
        slots.register({ name: "sidebar.brand.mark", priority: -10 }, ({ size }) => {
          const width = typeof size === "number" && size > 0 ? size : 23;
          return React.createElement("span", {
            className: "dafy-brand-mark",
            "aria-hidden": "true",
            style: { width, height: Math.round(width * 17 / 23) },
          });
        }));
      slots.inject("sidebar.brand.name", () =>
        slots.register({ name: "sidebar.brand.name", priority: -10 }, () =>
          React.createElement("span", { className: "dafy-brand-name" }, "蓝色大肥鱼")));
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
