<template>
  <a-layout-content style="padding: 0 50px">
    <div :style="{ background: '#f0f2f5', padding: '24px', minHeight: '280px' }">
      <h1>{{ msg }}</h1>
      <a-divider orientation="left"># Today ## Homework</a-divider>
      <div v-for="subject in upcomingItems">
        <a-divider orientation="left">
          {{ subject.subject }}
        </a-divider>
        <li v-for="hw in subject.homework" :style="{ listStyle: 'none' }">
          <a-card v-bind="hw.name" :bordered="false" style="width: 300px">
            <p>DUE #{{ hw.due }}</p>
            <p>{{ hw.description }}</p>
            <p>Card content</p>
          </a-card>
        </li>
      </div>
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
            uri: "[^http|projects]/video.mp4" // http://projects.qn.iblueg.cn/video.mp4
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
  }
}
</script>
