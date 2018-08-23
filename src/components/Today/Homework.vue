<template>
  <a-layout-content style="padding: 0 50px">
    <div :style="{ background: '#f0f2f5', padding: '24px', minHeight: '280px' }">
      <h1>{{ msg }}</h1>
      <a-divider orientation="left"># Today ## Homework</a-divider>
      <ul v-for="subject in upcomingItems">
        <a-divider orientation="left">
          {{ subject.subject }}
        </a-divider>
        <li v-for="hw in subject.homework" :style="{ listStyle: 'none' }">
          <a-card :title="hw.name" :bordered="true
          " style="">
            <p>DUE #{{ hw.due }}</p>
            <p>{{ hw.description }}</p>
            <a-card v-for="link in hw.links" :title="link.title" style="margin-top: 1em" :style="{ 'background-image': 'url(' + randomBackground() + ')' }">
              <a :href="formatLink(link.type, link.uri)" slot="extra">Jump To ></a>
              <h4>{{link.subtitle}}</h4>
            </a-card>
          </a-card>
        </li>
      </ul>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: 'TodayHomework',
  data () {
    return {
      msg: 'Homework > 11th Grade',
      upcomingItems: [{
        subject: "History",
        homework: [{
          name: "P208 Q1-8, 9",
          due: "2018.5.26 12:27 GMT +0800", // Be sure to include timezone
          description: "Book P208\nQuestion **Q1-8, 9**\nHand in on schoology", // Description should be markdown compatiable
          links: [{
            type: "schoology",
            title: "Hand In Homework",
            subtitle: "via Schoology",
            schoology_meta: "quiz",
            uri: "/assignment/100000/assignment_view" // => https://app.schoology.com/assignment/100000/assignment_view
          }, {
            type: "qn-iblueg",
            title: "Crash Course - Mesopotamia",
            uri: "[^http|projects]/videos/video.mp4" // http://projects.qn.iblueg.cn/videos/video.mp4
          }, {
            type: "iblueg",
            title: "Speed Test",
            subtitle: "via https://secure-cdn.iblueg.cn",
            uri: "[^https|secure-cdn]/10mb.test" // => https://secure-cdn.iblueg.cn/10mb.test
          }, {
            type: "outbound",
            title: "Some kind of website",
            subtitle: "Crawl the website, and show description here",
            uri: "https://example.com" // => [app]/link/?u=https://example.com
         }]
        }]
      }]
    }
  },
  methods: {
    formatLink: function (type, link) {
      let regex;
      let urlInfo;
      let m;
      switch (type) {
        case "schoology": {
          return "https://app.schoology.com" + link;
        }
        case "qn-iblueg": {
          regex = /^\[\^(http|https|ftp)\|([a-zA-Z-]+)](.*)/gm;
          urlInfo = [];
          while ((m = regex.exec(link)) !== null) {
            if (m.index === regex.lastIndex) {
              regex.lastIndex++;
            }
            m.forEach((match, groupIndex) => {
              if (groupIndex !== 0) {
                urlInfo.push(match)
              }
            });
          }
          if (urlInfo.length == 3) {
            return urlInfo[0] + "://" + urlInfo[1] + ".qn.iblueg.cn" + urlInfo[2]
          } else {
            return false
          }
        }
        case "iblueg": {
          let regex2 = /^\[\^(http|https|ftp)\|([a-zA-Z-]+)](.*)$/gm;
          let urlInfo2 = [];
          let mm;
          while ((mm = regex2.exec(link)) !== null) {
            if (mm.index === regex2.lastIndex) {
              regex2.lastIndex++;
            }
            mm.forEach((match, groupIndex) => {
              if (groupIndex !== 0) {
                urlInfo2.push(match)
              }
            });
          }
          if (urlInfo2.length == 3) {
            return urlInfo2[0] + "://" + urlInfo2[1] + ".iblueg.cn" + urlInfo2[2]
          } else {
            return false
          }
        }
        case "outbound": {
          return "/link/" + link;
        }
        default:
          return false
      }
    },
    randomBackground: function() {
      let randomize = Math.floor(Math.random() * 130).toString().padStart(3, '0');
      return `http://image.qn.iblueg.cn/kuanpin${{randomize}}.jpg`
    }
  }
}
</script>
