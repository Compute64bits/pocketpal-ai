import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';

export const createStyles = (theme: Theme, compact: boolean = false) =>
  StyleSheet.create({
    container: {
      marginTop: compact ? 2 : 4,
    },
    skillsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    skillsLabel: {
      fontSize: compact ? 10 : 12,
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginRight: 4,
    },
    skillItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 4,
    },
    specialSkill: {
      // Additional styling for special skills like vision
    },
    skillIcon: {
      margin: 0,
      padding: 0,
      width: compact ? 14 : 16,
      height: compact ? 14 : 16,
      marginRight: -2,
    },
    skillText: {
      fontSize: compact ? 10 : 12,
      fontWeight: '600',
    },
    specialSkillText: {
      fontWeight: '600',
    },
    skillsText: {
      fontSize: compact ? 10 : 12,
      color: theme.colors.onSurfaceVariant,
      flexShrink: 1,
    },
  });
