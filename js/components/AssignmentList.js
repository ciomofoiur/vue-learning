import Assignment from "./Assignment.js"

export default {
    template: `
        <section v-show="assignments.length">

            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>

        </section>
    `,

    components: { Assignment },

    props: {
        assignments: Array,
        title: String
    }
}