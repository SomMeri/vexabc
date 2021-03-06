/*
 * VexABC - ABC notation parser and renderer for VexFlow
 *
 * Copyright (c) 2012 Mikael Nousiainen
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

VexAbc.Def = function() {
};

VexAbc.Util = function() {
};

VexAbc.Def.DURATION_RESOLUTION = 262144;
VexAbc.Def.DEFAULT_VOICE_ID = "default";

VexAbc.Util.isDataNotePitchEqual = function(dataNote1, dataNote2) {
  return ((dataNote1.pitch == dataNote2.pitch) && (dataNote1.octave == dataNote2.octave));
}

VexAbc.Util.findEqualDataNotePitchIndices = function(dataNotes1, dataNotes2, fromIndices) {
  var result = {
    firstIndices: [],
    secondIndices: []
  };

  var length;
  if (fromIndices) {
    length = fromIndices.length;
  } else {
    length = dataNotes2.length;
  }

  for (var i = 0; i < length; i++) {
    var index;
    if (fromIndices) {
      index = fromIndices[i];
    } else {
      index = i;
    }

    var dataNote1 = dataNotes1[index];

    for (var j = 0; j < dataNotes2.length; j++) {
      var dataNote2 = dataNotes2[j];

      if (VexAbc.Util.isDataNotePitchEqual(dataNote1, dataNote2)) {
        result.firstIndices.push(index);
        result.secondIndices.push(j);
      }
    }
  }

  return result;
}

VexAbc.Def.fractionDurationToVexFlowDuration = {};

// TODO: This kind of array definition is really inflexible, so find a better way to deduce duration!
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 1] =
    { value: "1", dots: 0 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16] =
    { value: "2", dots: 3 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8] =
    { value: "2", dots: 2 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4] =
    { value: "2", dots: 1 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 2] =
    { value: "2", dots: 0 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32] =
    { value: "4", dots: 3 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16] =
    { value: "4", dots: 2 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8] =
    { value: "4", dots: 1 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 4] =
    { value: "4", dots: 0 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64] =
    { value: "8", dots: 3 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32] =
    { value: "8", dots: 2 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16] =
    { value: "8", dots: 1 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 8] =
    { value: "8", dots: 0 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128] =
    { value: "16", dots: 3 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64] =
    { value: "16", dots: 2 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32] =
    { value: "16", dots: 1 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 16] =
    { value: "16", dots: 0 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256] =
    { value: "32", dots: 3 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128] =
    { value: "32", dots: 2 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64] =
    { value: "32", dots: 1 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 32] =
    { value: "32", dots: 0 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256 + VexAbc.Def.DURATION_RESOLUTION / 512] =
    { value: "64", dots: 3 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256] =
    { value: "64", dots: 2 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128] =
    { value: "64", dots: 1 };
VexAbc.Def.fractionDurationToVexFlowDuration[VexAbc.Def.DURATION_RESOLUTION / 64] =
    { value: "64", dots: 0 };

// TODO: How to handle unknown durations?
VexAbc.Util.convertFractionDurationToVexFlowDuration = function(multiplier, noteValue) {
  var factor = VexAbc.Def.DURATION_RESOLUTION / noteValue;
  var durationTicks = multiplier * factor;

  var result = VexAbc.Def.fractionDurationToVexFlowDuration[durationTicks];
  if (!result) {
    return null;
  }

  result.beamable = (durationTicks < (VexAbc.Def.DURATION_RESOLUTION / 4));

  return result;
}

VexAbc.Util.isBeamedDuration = function(multiplier, noteValue) {
  var factor = VexAbc.Def.DURATION_RESOLUTION / noteValue;
  var durationTicks = multiplier * factor;
  return (durationTicks < (VexAbc.Def.DURATION_RESOLUTION / 4));
}

// Aim for stave center :)
VexAbc.Def.restNoteKeyForClef = {
  "treble": "b/4",
  "alto": "c/4",
  "tenor": "a/3",
  "bass": "d/3",
  "perc": "b/4"
};

VexAbc.Util.getRestNoteKeyForClef = function(clef) {
  var key = VexAbc.Def.restNoteKeyForClef[clef];
  if (!key) {
    return "b/4";
  }

  return key;
}

VexAbc.Def.abcDecorationToVexFlowArticulation = {
  "staccato": "a.", // staccato
  "staccatissimo": "av", // staccatissimo (non-standard)
  "accent": "a>", // accent
  "emphasis": "a>", // accent
  ">": "a>", // accent
  "tenuto": "a-", // tenuto
  "marcato": "a^", // marcato (marcatissimo?) (non-standard)
  "+": "a+", // left hand pizzicato
  "plus": "a+", // left hand pizzicato
  "snap": "ao", // snap pizzicato
  "thumb:": "ao", // snap pizzicato
  "fermata": "a@a", // fermata above staff
  "invertedfermata": "a@u", // fermata below staff
  "upbow": "a|", // up-bown - up stroke
  "downbow": "am" // down-bow - down stroke
};

VexAbc.Util.convertAbcDecorationToVexFlowArticulation = function (decoration) {
  return VexAbc.Def.abcDecorationToVexFlowArticulation[decoration];
}

VexAbc.Def.vexFlowAnnotationStyle = {
  "text": {
    fontName: "Times",
    fontSize: 12,
    fontWeight: "",
    verticalPosition: "above",
    justification: "center"
  },
  "dynamics": {
    fontName: "Times",
    fontSize: 14,
    fontWeight: "italic",
    verticalPosition: "below",
    justification: "center"
  },
  "other": {
    fontName: "Times",
    fontSize: 14,
    fontWeight: "italic",
    verticalPosition: "above",
    justification: "center"
  },
  "chordSymbol": {
    fontName: "Times",
    fontSize: 14,
    fontWeight: "bold",
    verticalPosition: "above",
    justification: "center"
  },
  "fingering": {
    fontName: "Times",
    fontSize: 10,
    fontWeight: "",
    verticalPosition: "above",
    justification: "center"
  }
};

VexAbc.Util.getVexFlowAnnotationStyle = function(id) {
  return VexAbc.Def.vexFlowAnnotationStyle[id];
}

VexAbc.Def.abcDecorationToVexFlowAnnotation = {
  "0": {
    type: "annotation",
    style: "fingering",
    value: "0"
  },
  "1": {
    type: "annotation",
    style: "fingering",
    value: "1"
  },
  "2": {
    type: "annotation",
    style: "fingering",
    value: "2"
  },
  "3": {
    type: "annotation",
    style: "fingering",
    value: "3"
  },
  "4": {
    type: "annotation",
    style: "fingering",
    value: "4"
  },
  "5": {
    type: "annotation",
    style: "fingering",
    value: "5"
  },
  "pppp": {
    type: "annotation",
    style: "dynamics",
    value: "pppp"
  },
  "ppp": {
    type: "annotation",
    style: "dynamics",
    value: "ppp"
  },
  "pp": {
    type: "annotation",
    style: "dynamics",
    value: "pp"
  },
  "p": {
    type: "annotation",
    style: "dynamics",
    value: "p"
  },
  "mp": {
    type: "annotation",
    style: "dynamics",
    value: "mp"
  },
  "mf": {
    type: "annotation",
    style: "dynamics",
    value: "mf"
  },
  "f": {
    type: "annotation",
    style: "dynamics",
    value: "f"
  },
  "ff": {
    type: "annotation",
    style: "dynamics",
    value: "ff"
  },
  "fff": {
    type: "annotation",
    style: "dynamics",
    value: "fff"
  },
  "ffff": {
    type: "annotation",
    style: "dynamics",
    value: "ffff"
  },
  "sfz": {
    type: "annotation",
    style: "dynamics",
    value: "sfz"
  },
  "trill": {
    type: "annotation",
    style: "other",
    value: "tr"
  }
};

VexAbc.Util.convertAbcDecorationToVexFlowAnnotation = function (decoration) {
  return VexAbc.Def.abcDecorationToVexFlowAnnotation[decoration];
}

/*
TODO: decorations using text annotations:

!D.S.!                 the letters D.S. (=Da Segno)
!D.C.!                 the letters D.C. (=either Da Coda or Da Capo)
!dacoda!               the word "Da" followed by a Coda sign
!dacapo!               the words "Da Capo"
!fine!                 the word "fine"

TODO: VexFlow probably supports these too:
!segno!                2 ornate s-like symbols separated by a diagonal line
!coda!                 a ring with a cross in it

*/

