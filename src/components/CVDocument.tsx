import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Link,
} from '@react-pdf/renderer'
import { cvData } from '@/lib/cv-data'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
        color: '#27272a', // zinc-800
    },
    header: {
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e7', // zinc-200
        paddingBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 8,
        color: '#18181b', // zinc-900
        textTransform: 'uppercase',
        letterSpacing: -0.5,
    },
    role: {
        fontSize: 12,
        color: '#14b8a6', // teal-500
        fontWeight: 700,
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    contactInfo: {
        fontSize: 9,
        color: '#71717a', // zinc-500
    },
    mainContainer: {
        flexDirection: 'row',
        gap: 30,
        flex: 1,
    },
    columnLeft: {
        width: '65%',
    },
    columnRight: {
        width: '35%',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        marginBottom: 16,
        textTransform: 'uppercase',
        color: '#18181b', // zinc-900
        letterSpacing: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f5',
        paddingBottom: 6,
    },
    experienceItem: {
        marginBottom: 24,
    },
    company: {
        fontSize: 12,
        fontWeight: 700,
        color: '#18181b',
        marginBottom: 4,
    },
    roleItem: {
        marginBottom: 12,
        paddingLeft: 12,
        borderLeftWidth: 1,
        borderLeftColor: '#e4e4e7',
    },
    roleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 4,
    },
    roleTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: '#27272a',
    },
    date: {
        fontSize: 9,
        color: '#a1a1aa', // zinc-400
        fontStyle: 'italic',
    },
    description: {
        fontSize: 10,
        color: '#52525b', // zinc-600
        lineHeight: 1.5,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    bullet: {
        width: 3,
        height: 3,
        backgroundColor: '#d4d4d8', // zinc-300
        borderRadius: 1.5,
        marginTop: 6,
        marginRight: 8,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    skillBadge: {
        fontSize: 9,
        backgroundColor: '#f4f4f5', // zinc-100
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        color: '#52525b', // zinc-600
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f5',
        paddingBottom: 2,
    },
    languageName: {
        fontSize: 10,
        color: '#27272a',
        fontWeight: 600,
    },
    languageLevel: {
        fontSize: 10,
        color: '#71717a',
    },
})

export const CVDocument = () => {
    // Split experiences
    const page1Experiences = cvData.experiences.slice(0, 3) // BossData, ZIGT, Freelance
    const page2Experiences = cvData.experiences.slice(3) // GroupM, deMens.nu

    return (
        <Document>
            {/* Page 1 */}
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{cvData.personal.name}</Text>
                    <Text style={styles.role}>{cvData.personal.role}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactInfo}>{cvData.personal.email}</Text>
                        <Text style={styles.contactInfo}>•</Text>
                        <Text style={styles.contactInfo}>{cvData.personal.phone}</Text>
                        <Text style={styles.contactInfo}>•</Text>
                        <Link src={`https://${cvData.personal.linkedin}`} style={styles.contactInfo}>
                            {cvData.personal.linkedin}
                        </Link>
                        <Text style={styles.contactInfo}>•</Text>
                        <Link src={`https://${cvData.personal.website}`} style={styles.contactInfo}>
                            {cvData.personal.website}
                        </Link>
                    </View>
                </View>

                <View style={styles.mainContainer}>
                    {/* Left Column: Experience */}
                    <View style={styles.columnLeft}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Experience</Text>
                            {page1Experiences.map((exp, index) => (
                                <View key={index} style={styles.experienceItem} wrap={false}>
                                    <Text style={styles.company}>{exp.company}</Text>
                                    {exp.roles.map((role, roleIndex) => (
                                        <View key={roleIndex} style={styles.roleItem}>
                                            <View style={styles.roleHeader}>
                                                <Text style={styles.roleTitle}>{role.title}</Text>
                                                <Text style={styles.date}>
                                                    {new Date(role.date).getFullYear()} -{' '}
                                                    {role.endDate
                                                        ? new Date(role.endDate).getFullYear()
                                                        : 'Present'}
                                                </Text>
                                            </View>
                                            <View>
                                                {role.description.map((desc, i) => (
                                                    <View key={i} style={styles.bulletPoint}>
                                                        <View style={styles.bullet} />
                                                        <Text style={styles.description}>{desc}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Right Column: Skills & Languages */}
                    <View style={styles.columnRight}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            <View style={styles.skillsContainer}>
                                {cvData.skills.map((skill, index) => (
                                    <Text key={index} style={styles.skillBadge}>
                                        {skill}
                                    </Text>
                                ))}
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Languages</Text>
                            {cvData.languages.map((lang, index) => (
                                <View key={index} style={styles.languageItem}>
                                    <Text style={styles.languageName}>{lang.name}</Text>
                                    <Text style={styles.languageLevel}>{lang.level}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>

            {/* Page 2 */}
            <Page size="A4" style={styles.page}>
                <View style={styles.mainContainer}>
                    {/* Left Column: Remaining Experience */}
                    <View style={styles.columnLeft}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Experience (Continued)</Text>
                            {page2Experiences.map((exp, index) => (
                                <View key={index} style={styles.experienceItem} wrap={false}>
                                    <Text style={styles.company}>{exp.company}</Text>
                                    {exp.roles.map((role, roleIndex) => (
                                        <View key={roleIndex} style={styles.roleItem}>
                                            <View style={styles.roleHeader}>
                                                <Text style={styles.roleTitle}>{role.title}</Text>
                                                <Text style={styles.date}>
                                                    {new Date(role.date).getFullYear()} -{' '}
                                                    {role.endDate
                                                        ? new Date(role.endDate).getFullYear()
                                                        : 'Present'}
                                                </Text>
                                            </View>
                                            <View>
                                                {role.description.map((desc, i) => (
                                                    <View key={i} style={styles.bulletPoint}>
                                                        <View style={styles.bullet} />
                                                        <Text style={styles.description}>{desc}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Right Column: Tool Stack */}
                    <View style={styles.columnRight}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Tool Stack</Text>
                            <View style={styles.skillsContainer}>
                                {cvData.toolStack.map((tool, index) => (
                                    <Text key={index} style={styles.skillBadge}>
                                        {tool}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}
